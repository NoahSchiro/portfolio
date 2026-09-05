import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

const about_me: string = 'I work at MITRE as an ML researcher. This fall, I am starting a M.S. in Data Science at Harvard and doing research on few-shot learning in robotics.';

const emails = [
  { label: 'noahschiro@g.harvard.edu', href: 'mailto:noahschiro@g.harvard.edu', use_case: 'Research (general)'},
  { label: 'noahschi@mit.edu', href: 'mailto:noahschi@mit.edu', use_case: 'Research (MIT)'},
  { label: 'noahschiro@rocketmail.com', href: 'mailto:noahschiro@rocketmail.com', use_case: 'All other'},
]

function Home() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Noah Schiro
      </Typography>
      <Typography color="text.secondary">
        {about_me}
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 5 }}>
        For inquiries and collaboration, please use one of the following:
      </Typography>
      <List sx={{ listStyleType: 'disc', pl: 4 }}>
        {emails.map((email) => (
          <ListItem key={email.label} sx={{ display: 'list-item', py: 0.5 }}>
            <Typography>
              {email.use_case}:{' '}
              <Link href={email.href} underline="hover">
                {email.label}
              </Link>
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Home
