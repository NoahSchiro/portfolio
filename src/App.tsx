import { useMemo, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Switch from '@mui/material/Switch'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { ThemeProvider } from '@mui/material/styles'
import Home from './pages/Home'
import Education from './pages/Education'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { getTheme, type ThemeMode } from './theme'

const tabs = [
  { label: 'Home', component: <Home /> },
  { label: 'Education', component: <Education /> },
  { label: 'Work', component: <Work /> },
  { label: 'Projects', component: <Projects /> },
]

function App() {
  const [active, setActive] = useState(0)
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode')
    return saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  })
  const theme = useMemo(() => getTheme(mode), [mode])

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme-mode', next)
      return next
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color="transparent" elevation={0}>
          <Toolbar sx={{ justifyContent: 'center', gap: 2, position: 'relative' }}>
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
            <Switch
              checked={mode === 'dark'}
              onChange={toggleMode}
              icon={<LightModeIcon fontSize="small" />}
              checkedIcon={<DarkModeIcon fontSize="small" />}
              sx={{ position: 'absolute', right: 8 }}
            />
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ py: 6, flexGrow: 1 }}>
          {tabs[active].component}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
