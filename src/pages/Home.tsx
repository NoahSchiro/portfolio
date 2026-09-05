import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const about_me: string = "I like to make rocks think.";

function Home() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Noah Schiro
      </Typography>
      <Typography color="text.secondary">
        {about_me}
      </Typography>
    </Box>
  )
}

export default Home
