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
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header />
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App
