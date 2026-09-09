export interface BlogPost {
  slug: string
  title: string
  date: string
  readingTime: number
  content: string
}

const files = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(frontmatterRegex)
  if (!match) return { data: {}, content: raw }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, '')
    if (key) data[key] = value
  }
  return { data, content: raw.slice(match[0].length) }
}

const WORDS_PER_MINUTE = 200

function getReadingTime(content: string): number {
  const words = content
    .replace(/```[\s\S]*?```/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE))
}

export const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.slice(path.lastIndexOf('/') + 1).replace(/\.md$/, '')
    const { data, content } = parseFrontmatter(raw)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      readingTime: getReadingTime(content),
      content,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(date: string): string {
  if (!date) return ''
  const parsed = new Date(`${date}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
