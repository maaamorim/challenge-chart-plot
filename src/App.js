import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Index from './pages/Index'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif'
    ].join(',')
  },
  palette: {
    primary: {
      main: '#007ffd'
    }
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Index />
      </div>
    </ThemeProvider>
  )
}

export default App
