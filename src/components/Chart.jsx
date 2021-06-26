import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Line } from 'react-chartjs-2'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: '#6dba52',
      backgroundColor: '#6dba52',
      borderWidth: 2
    }
  ]
}

const options = {
  maintainAspectRatio: false,
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
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

class Chart extends Component {
  render () {
    return (
      <div style={{ height: '44vh' }}>
        { this.props.displayChart ? <Line data={data} options={options} redraw={false} /> : null}
      </div>
    )
  }
}

Chart.propTypes = {
  displayChart: PropTypes.bool
}

export default Chart
