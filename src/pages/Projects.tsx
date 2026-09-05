import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

interface Project {
  title: string
  description: string[]
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    title: 'Aleph — Book Recommendation System',
    description: [
      'Built a production-grade recommendation system on the Goodreads dataset (~876K users, ~2.36M books, ~100M interactions), comparing a BPR matrix factorization baseline against a Two-Tower neural network with in-batch sampled softmax; best model reached Recall@10 = 0.831 and NDCG@10 = 0.700.',
      'Implemented the full ML lifecycle: Polars-based ETL into Parquet with leave-N-out splits, weighted-loss ablations across interaction signals, and pre-computed item embeddings that let serving run as a single dot product with no GPU.',
      'Deployed as a FastAPI backend on serverless AWS Lambda (via Docker/ECR) with artifacts loaded from S3 on cold start, plus a static frontend on GitHub Pages.',
    ],
    tags: ['Python', 'PyTorch', 'Polars', 'FastAPI', 'AWS Lambda', 'Docker', 'Recommendation Systems'],
    link: 'https://github.com/NoahSchiro/aleph',
  },
  {
    title: 'Minigrad — Autograd & Neural Networks from Scratch',
    description: [
      'Built a from-scratch deep learning framework implementing reverse-mode automatic differentiation and neural network primitives, starting as a Python prototype (2023) and rewritten in dependency-free Go (2025–2026).',
      'Designed a three-tier architecture: an N-dimensional array engine with adaptive serial/parallel dispatch, a tensor autograd layer using closure-based backward passes over a topologically sorted computation graph, and an nn package with SGD/Adam optimizers.',
      'Added an experimental CUDA branch via CGo for GPU vector operations, backed by 32+ unit tests and 20 performance benchmarks validating both correctness and the parallelism thresholds.',
    ],
    tags: ['Go', 'Python', 'CUDA', 'CGo', 'Autograd', 'Systems Programming'],
    link: 'https://github.com/NoahSchiro/minigrad',
  },
  {
    title: 'torch-pc — Predictive Coding Networks in PyTorch',
    description: [
      'Designed, implemented, and published torch-pc, an open-source PyTorch library for Predictive Coding Networks — a biologically-plausible alternative to backpropagation based on local, Hebbian-like updates and free-energy minimization.',
      'Built a two-phase training loop (latent inference to minimize layerwise prediction error, then local Hebbian-style weight updates) with CUDA and mixed-precision support, plus from_bp()/to_bp() conversion utilities for direct comparison against standard backprop models.',
      'Validated on CIFAR-10, MNIST, and sine wave regression, and published the package to PyPI under MIT license.',
    ],
    tags: ['Python', 'PyTorch', 'CUDA', 'PyPI', 'Predictive Coding'],
    link: 'https://github.com/NoahSchiro',
  },
  {
    title: 'paint-by-numbers — Generative Impressionist Art',
    description: [
      'Generative image modeling project inspired by Andy Warhol\'s Do It Yourself series, exploring the mechanization of art through two generative paradigms built roughly three years apart.',
      'Phase 1 (2023): built a DCGAN from scratch in PyTorch, trained on ImageNet with a custom aspect-ratio-preserving data pipeline, scaling from 64×64 to 128×128 output.',
      'Phase 2 (2025–2026): fully rewrote the project on Meta\'s Flow Matching framework, implementing continuous and discrete probability paths, classifier-free guidance, EMA, and distributed multi-GPU training via NCCL/SLURM, evaluated with FID on ImageNet-scale data.',
    ],
    tags: ['PyTorch', 'Flow Matching', 'GANs', 'Distributed Training', 'Computer Vision'],
    link: 'https://github.com/NoahSchiro/paint-by-numbers',
  },
  {
    title: 'Bluebikes — Per-Station LSTM Demand Forecasting & Dynamic Pricing',
    description: [
      'Ingested ~25M BlueBikes trips (2011–2024) from monthly CSVs with three incompatible schemas into a unified SQLite database, then trained 212 independent per-station LSTM models to forecast hourly arrivals and departures.',
      '70 of 212 stations (33%) predicted both arrivals and departures within 1 bike of ground truth, with a further 60% within 2 bikes; all runs tracked via a self-hosted MLFlow server.',
      'Used the demand forecasts to simulate dynamic pricing based on price elasticity of demand, increasing simulated annual revenue by 58.6% ($6.6 million increase) versus flat pricing despite a 5.1% drop in ridership.',
    ],
    tags: ['Python', 'PyTorch', 'LSTM', 'SQLite', 'MLFlow', 'Time Series Forecasting'],
    link: 'https://github.com/NoahSchiro/bluebikes',
  },
]

const open_source: Project[] = [
  {
    title: 'pytorch/examples — Transformer Translation Example',
    description: [
      'Implemented a language translation example following "Attention Is All You Need," covering the full pipeline from training to inference plus a terminal UI for interactive translation, hooked into the repo\'s CI.',
      'Merged into the official PyTorch examples repository (3.8k GitHub stars).',
    ],
    tags: ['PyTorch', 'Transformers', 'NLP'],
    link: 'https://github.com/pytorch/examples/pull/1240',
  },
  {
    title: 'openai/improved-diffusion — fp16 Training Fix',
    description: [
      'Diagnosed and patched a bug preventing fp16 mixed-precision training from working correctly in OpenAI\'s official implementation of Improved Denoising Diffusion Probabilistic Models, caused by a PyTorch API change.',
      'Merged into a repository with 24k GitHub stars, enabling faster, lower-memory training and inference for the community.',
    ],
    tags: ['PyTorch', 'Diffusion Models', 'Mixed Precision'],
    link: 'https://github.com/openai/improved-diffusion/pull/129',
  },
  {
    title: 'tinygrad/tinygrad — softmin Activation Function',
    description: [
      'Implemented the softmin activation function for tinygrad, an ML library designed for high portability across a wide range of hardware accelerators.',
      'Merged and shipped as part of the 0.14.0 release.',
    ],
    tags: ['Python', 'tinygrad', 'ML Frameworks'],
    link: 'https://github.com/tinygrad/tinygrad/pull/17292',
  },
  {
    title: 'tinygrad/tinygrad — bf16 Cast Fix on NVIDIA GPUs',
    description: [
      'Fixed a bug affecting NVIDIA GPUs with compute architectures between sm53 and sm80, which lacked support for certain half-precision operations.',
      'Resolved the issue by selectively upcasting the affected operations to 32-bit precision, restoring correct behavior on those architectures.',
    ],
    tags: ['Python', 'CUDA', 'tinygrad', 'Numerical Precision'],
    link: 'https://github.com/tinygrad/tinygrad/pull/17292',
  },
  {
    title: 'tracel-ai/burn — softmin Tensor Operation',
    description: [
      'Implemented softmin (the inverse of softmax) for Burn, a high-performance Rust ML framework, filling a gap needed for the library\'s path to a v1.0 release.',
      'Merged and shipped in the 0.15.0 release and every version since, in a framework with 15.6k GitHub stars and thousands of monthly downloads.',
    ],
    tags: ['Rust', 'ML Frameworks', 'Tensor Operations'],
    link: 'https://github.com/tracel-ai/burn/pull/2358',
  },
]

function ProjectItem({ project }: { project: Project }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2">
          {project.title}
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4, mt: 1 }}>
          {project.description.map((item) => (
            <ListItem key={item} sx={{ display: 'list-item', py: 0.5 }}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.link}>
          View Project
        </Button>
      </CardActions>
    </Card>
  )
}

function Projects() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Open Source Contributions
      </Typography>
      <Box sx={{ display: 'grid', gap: 3 }}>
        {open_source.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </Box>
      <Typography variant="h3" component="h1" sx={{ mt: 3}} gutterBottom>
        Personal Projects
      </Typography>
      <Box sx={{ display: 'grid', gap: 3 }}>
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </Box>
    </Box>
  )
}

export default Projects
