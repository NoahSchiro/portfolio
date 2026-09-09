import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import { formatDate, posts } from '../blog'

function Blog() {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Blog
      </Typography>
      {posts.length === 0 ? (
        <Typography color="text.secondary">No posts yet.</Typography>
      ) : (
        <Box sx={{ display: 'grid', gap: 2 }}>
          {posts.map((post) => (
            <Paper
              key={post.slug}
              component={RouterLink}
              to={`/blog/${post.slug}`}
              sx={{
                display: 'block',
                p: 2.5,
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.2s',
                '&:hover': { borderColor: 'primary.main' },
              }}
            >
              <Typography variant="h6" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {[formatDate(post.date), `~ ${post.readingTime} min read`]
                  .filter(Boolean)
                  .join(' | ')}
              </Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default Blog
