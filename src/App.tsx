import { useLayoutEffect, useMemo, useState } from 'react'
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
import useMediaQuery from '@mui/material/useMediaQuery'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import Work from './pages/Work'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Footer from './components/Footer'
import { getTheme, type ThemeMode } from './theme'

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Work', path: '/work' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode')
    return saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
  })
  const theme = useMemo(() => getTheme(mode), [mode])
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const active = tabs.findIndex((tab) =>
    tab.path === '/' ? location.pathname === '/' : location.pathname.startsWith(tab.path),
  )

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
        <ScrollToTop />
        <AppBar
          position="sticky"
          color="transparent"
          elevation={0}
          sx={{
            backgroundColor:
              mode === 'dark' ? 'rgba(40, 40, 40, 0.85)' : 'rgba(251, 241, 199, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <Toolbar
            sx={{ justifyContent: 'center', gap: 2, position: 'relative', pr: { xs: 7, sm: 0 } }}
          >
            <Tabs
              value={active === -1 ? false : active}
              onChange={(_, value: number) => navigate(tabs[value].path)}
              textColor="primary"
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons={false}
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
