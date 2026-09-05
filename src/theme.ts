import { createTheme } from '@mui/material/styles'

export type ThemeMode = 'light' | 'dark'

export function getTheme(mode: ThemeMode) {
  const dark = mode === 'dark'
  return createTheme({
    palette: {
      mode,
      primary: { main: dark ? '#83a598' : '#076678' },
      secondary: { main: dark ? '#d3869b' : '#8f3f71' },
      error: { main: dark ? '#fb4934' : '#9d0006' },
      warning: { main: dark ? '#fabd2f' : '#b57614' },
      success: { main: dark ? '#b8bb26' : '#79740e' },
      info: { main: dark ? '#8ec07c' : '#458588' },
      background: {
        default: dark ? '#282828' : '#fbf1c7',
        paper: dark ? '#3c3836' : '#ebdbb2',
      },
      text: {
        primary: dark ? '#ebdbb2' : '#3c3836',
        secondary: dark ? '#a89984' : '#7c6f64',
      },
      divider: dark ? '#504945' : '#d5c4a1',
    },
    typography: {
      fontFamily:
        '"IBM Plex Mono", ui-monospace, "Cascadia Mono", "Fira Mono", Menlo, Consolas, monospace',
    },
    shape: { borderRadius: 0 },
    components: {
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            border: `1px solid ${dark ? '#504945' : '#d5c4a1'}`,
            boxShadow: 'none',
          },
        },
      },
    },
  })
}
