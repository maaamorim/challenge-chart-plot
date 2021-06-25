import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Header from './components/Header'
import Footer from './components/Footer'

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
      <div className="App">
        <Header />
        <div style={{ height: '84vh' }}/>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
