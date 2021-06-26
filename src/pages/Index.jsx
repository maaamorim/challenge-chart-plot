import React, { Component } from 'react'

import Header from '../components/Header'
import TextEditor from '../components/TextEditor'
import Footer from '../components/Footer'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputText: null
    }
    this.getInputText = this.getInputText.bind(this)
    this.generateChart = this.generateChart.bind(this)
  }

  getInputText (text) {
    this.setState({ inputText: text })
  }

  generateChart () {
    console.log(this.state.inputText)
  }

  render () {
    return (
      <div>
        <Header />
        <TextEditor callbackTextSubmitted={this.getInputText}/>
        <div style={{ height: '44vh' }} />
        <Footer callbackButtonClicked={this.generateChart}/>
      </div>
    )
  }
}

export default Index
