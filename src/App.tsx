import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Hello World
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          A simple site built with Vite, TypeScript, React, and Material UI.
        </Typography>
        <Button variant="contained" size="large">
          Get Started
        </Button>
      </Box>
    </Container>
  )
}

export default App
