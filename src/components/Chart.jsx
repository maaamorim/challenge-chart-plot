import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Line } from 'react-chartjs-2'

const options = {
  maintainAspectRatio: false,
  animations: false,
  layout: {
    padding: 30
  },
  plugins: {
    legend: {
      position: 'right',
      align: 'start',
      labels: {
        font: 'Source Sans Pro',
        usePointStyle: true,
        boxWidth: 12
      }
    }
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          drawBorder: false
        }
      }
    ]
  }
}

class Chart extends Component {
  render () {
    return (
      <div style={{ height: '44vh' }}>
        { this.props.data ? <Line data={this.props.data} options={options} redraw={false} /> : null}
      </div>
    )
  }
}

Chart.propTypes = {
  data: PropTypes.object
}

export default Chart
