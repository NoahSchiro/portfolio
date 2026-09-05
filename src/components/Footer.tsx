import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const links = [
  { label: 'Email', href: 'mailto:noahschiro@rocketmail.com' },
  { label: 'GitHub', href: 'https://github.com/NoahSchiro' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/noah-schiro-516754190/' },
]

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 'auto', borderTop: 1, borderColor: 'divider', py: 3 }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" color="text.secondary">
         Contact information:
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 1 }}
        >
          {links.map((link) => (
            <Button
              key={link.label}
              size="small"
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          © 2026 Noah Schiro
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
