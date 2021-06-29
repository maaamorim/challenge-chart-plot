import React, { Component } from 'react'

import Header from '../components/Header'
import TextEditor from '../components/TextEditor'
import Chart from '../components/Chart'
import Footer from '../components/Footer'

import generateChartData from '../utils/generateChartData'

/**
 * Main page component.
 * Basically incorporates all components and handles data exchange between them.
 */
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputText: null,
      chartData: null
    }
    this.getInputText = this.getInputText.bind(this)
    this.generateChart = this.generateChart.bind(this)
  }

  getInputText (text) {
    this.setState({ inputText: text })
  }

  generateChart () {
    this.setState({ chartData: generateChartData(this.state.inputText) })
  }

  render () {
    return (
      <div>
        <Header />
        <TextEditor callbackTextSubmitted={this.getInputText} />
        <Chart data={this.state.chartData} />
        <Footer callbackButtonClicked={this.generateChart} />
      </div>
    )
  }
}

export default Index
