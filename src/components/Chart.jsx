import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Line } from 'react-chartjs-2'

import { CHART_OPTIONS, SCREEN_SIZE_DIVISON } from '../utils/constants'

/**
 * Chart component.
 * It shows the chart in the corresponding part of the screen.
 * Receives the already-converted data from its father component (the main screen).
 */
class Chart extends Component {
  render () {
    return (
      <div style={{ height: SCREEN_SIZE_DIVISON.chart }}>
        { this.props.data ? <Line data={this.props.data} options={CHART_OPTIONS} redraw={false} /> : null}
      </div>
    )
  }
}

Chart.propTypes = {
  data: PropTypes.object
}

export default Chart
