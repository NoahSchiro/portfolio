import type { ComponentProps } from 'react'
import type { Components } from 'react-markdown'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useTheme } from '@mui/material/styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { formatDate, getPost } from '../blog'
import 'katex/dist/katex.min.css'
import '../blog/hljs.css'

function MarkdownParagraph({ children }: { children?: ComponentProps<'p'>['children'] }) {
  return <Typography sx={{ my: 2 }}>{children}</Typography>
}

function MarkdownCode({ className, children }: ComponentProps<'code'>) {
  if (className?.includes('language-')) {
    return <code className={className}>{children}</code>
  }
  return (
    <Box
      component="code"
      sx={{
        bgcolor: 'action.hover',
        px: 0.75,
        fontSize: '0.875em',
      }}
    >
      {children}
    </Box>
  )
}

function MarkdownPre({ children }: ComponentProps<'pre'>) {
  return (
    <Paper
      component="pre"
      className="markdown-pre"
      sx={{ p: 2, my: 2, overflowX: 'auto', fontSize: '0.875rem' }}
    >
      {children}
    </Paper>
  )
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
      {children}
    </Typography>
  ),
  h2: ({ children }) => (
    <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4 }}>
      {children}
    </Typography>
  ),
  h3: ({ children }) => (
    <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
      {children}
    </Typography>
  ),
  h4: ({ children }) => (
    <Typography
      variant="subtitle1"
      component="h4"
      gutterBottom
      sx={{ mt: 3, fontWeight: 'bold' }}
    >
      {children}
    </Typography>
  ),
  h5: ({ children }) => (
    <Typography
      variant="subtitle2"
      component="h5"
      gutterBottom
      sx={{ mt: 2, fontWeight: 'bold' }}
    >
      {children}
    </Typography>
  ),
  h6: ({ children }) => (
    <Typography
      variant="subtitle2"
      component="h6"
      gutterBottom
      sx={{ mt: 2, fontWeight: 'bold' }}
    >
      {children}
    </Typography>
  ),
  p: MarkdownParagraph,
  a: ({ href, children }) =>
    href?.startsWith('/') ? (
      <Link component={RouterLink} to={href} underline="hover">
        {children}
      </Link>
    ) : (
      <Link href={href} underline="hover">
        {children}
      </Link>
    ),
  ul: ({ children }) => <List sx={{ listStyleType: 'disc', pl: 4, py: 0 }}>{children}</List>,
  ol: ({ children }) => <List sx={{ listStyleType: 'decimal', pl: 4, py: 0 }}>{children}</List>,
  li: ({ children }) => <ListItem sx={{ display: 'list-item', py: 0.5 }}>{children}</ListItem>,
  blockquote: ({ children }) => (
    <Box sx={{ borderLeft: 3, borderColor: 'divider', pl: 2, my: 2, color: 'text.secondary' }}>
      {children}
    </Box>
  ),
  table: ({ children }) => (
    <TableContainer component={Paper} sx={{ my: 2 }}>
      <Table size="small">{children}</Table>
    </TableContainer>
  ),
  thead: ({ children }) => <TableHead>{children}</TableHead>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => <TableCell>{children}</TableCell>,
  td: ({ children }) => <TableCell>{children}</TableCell>,
  code: MarkdownCode,
  pre: MarkdownPre,
  hr: () => <Divider sx={{ my: 3 }} />,
  img: ({ src, alt }) => (
    <Box component="figure" sx={{ my: 3, mx: 0 }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          maxWidth: '100%',
          display: 'block',
          mx: 'auto',
          border: 1,
          borderColor: 'divider',
        }}
      />
      {alt ? (
        <Typography
          component="figcaption"
          variant="caption"
          color="text.secondary"
          sx={{ display: 'block', textAlign: 'center', mt: 1 }}
        >
          {alt}
        </Typography>
      ) : null}
    </Box>
  ),
}

function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined
  const theme = useTheme()
  const dark = theme.palette.mode === 'dark'

  if (!post) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Post not found
        </Typography>
        <Button
          component={RouterLink}
          to="/blog"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
        >
          Back
        </Button>
      </Box>
    )
  }

  return (
    <Box className={`markdown-content ${dark ? 'theme-dark' : 'theme-light'}`}>
      <Button component={RouterLink} to="/blog" startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
        Back
      </Button>
      <Typography variant="h3" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        {formatDate(post.date)}
      </Typography>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { throwOnError: false }], rehypeHighlight]}
        components={markdownComponents}
      >
        {post.content}
      </ReactMarkdown>
    </Box>
  )
}

export default BlogPost
