#!/usr/bin/env bash
#
# Build the portfolio and deploy dist/ to S3, then invalidate CloudFront.
#
# Usage:
#   ./deploy.sh
#
# Configuration (env vars, overridable with flags):
#   DEPLOY_BUCKET            S3 bucket to upload to
#   DEPLOY_DISTRIBUTION_ID   CloudFront distribution ID
#
# AWS credentials are taken from the environment (AWS_PROFILE, OIDC in CI, ...).

set -euo pipefail

log() { printf '\033[1;34m==>\033[0m %s\n' "$*"; }
die() { printf '\033[1;31merror:\033[0m %s\n' "$*" >&2; exit 1; }

usage() {
  echo "Usage: ./deploy.sh"
  exit 0
}

BUCKET="noahschiro-portfolio"
DISTRIBUTION_ID="E3QL079HQOIIAH"

# Preflight
command -v aws >/dev/null || die "aws CLI not found in PATH"
command -v npm >/dev/null || die "npm not found in PATH"

IDENTITY=$(aws sts get-caller-identity --query 'Arn' --output text) \
  || die "AWS credentials invalid or missing"
log "Deploying as: $IDENTITY"
log "Target: s3://$BUCKET via CloudFront distribution $DISTRIBUTION_ID"

# Build
log "Installing dependencies"
npm ci
log "Building"
npm run build
[[ -f dist/index.html ]] || die "dist/index.html not found after build"

# Upload
#
# Pass 1: hashed assets (Vite content-hashes filenames, so they are immutable)
#         -> 1-year cache, and --delete removes stale assets from old builds.
#         index.html/favicon.svg are excluded so they can't be deleted here
#         and are never cached long.
# Pass 2: entrypoints that must always revalidate -> no-cache.
log "Uploading immutable assets (1-year cache)"
aws s3 sync dist/ "s3://$BUCKET" --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "favicon.svg"

log "Uploading entrypoints (no-cache)"
aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --cache-control "no-cache" --content-type "text/html"

if [[ -f dist/favicon.svg ]]; then
  aws s3 cp dist/favicon.svg "s3://$BUCKET/favicon.svg" \
    --cache-control "no-cache" --content-type "image/svg+xml"
fi

# Invalidate
#
# "/*" counts as one invalidation path (1,000/month are free), and guarantees
# edges are fresh immediately instead of relying on revalidation.
log "Creating CloudFront invalidation (/*)"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.Id' --output text)
log "Invalidation $INVALIDATION_ID in progress"

log "Deploy finished."
