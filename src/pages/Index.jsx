import React, { Component } from 'react'

import Header from '../components/Header'
import TextEditor from '../components/TextEditor'
import Chart from '../components/Chart'
import Footer from '../components/Footer'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputText: null,
      displayChart: false
    }
    this.getInputText = this.getInputText.bind(this)
    this.generateChart = this.generateChart.bind(this)
  }

  getInputText (text) {
    this.setState({ inputText: text })
  }

  generateChart () {
    this.setState({ displayChart: true })
    console.log(this.state.inputText)
  }

  render () {
    return (
      <div>
        <Header />
        <TextEditor callbackTextSubmitted={this.getInputText}/>
        <Chart displayChart={this.state.displayChart} />
        <Footer callbackButtonClicked={this.generateChart}/>
      </div>
    )
  }
}

export default Index
