import React, { Component } from 'react'

import Header from '../components/Header'
import TextEditor from '../components/TextEditor'
import Footer from '../components/Footer'

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <TextEditor />
        <div style={{ height: '44vh' }} />
        <Footer />
      </div>
    )
  }
}

export default Index
