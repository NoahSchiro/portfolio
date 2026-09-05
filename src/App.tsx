import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Footer from './components/Footer'

const tabs = [
  { label: 'Home', component: <Home /> },
  { label: 'Education', component: <Education /> },
  { label: 'Work', component: <Work /> },
  { label: 'Projects', component: <Projects /> },
]

function App() {
  const [active, setActive] = useState(0)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
          <Tabs
            value={active}
            onChange={(_, value: number) => setActive(value)}
            textColor="primary"
            slotProps={{ indicator: { sx: { display: 'none' } } }}
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                label={tab.label}
                sx={{ '&.Mui-selected': { fontWeight: 'bold' } }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 6, flexGrow: 1 }}>
        {tabs[active].component}
      </Container>
      <Footer />
    </Box>
  )
}

export default App
