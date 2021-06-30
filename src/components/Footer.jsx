import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SCREEN_SIZE_DIVISON } from '../utils/constants'

const style = {
  footer: {
    backgroundColor: '#dddee1',
    height: SCREEN_SIZE_DIVISON.footer,
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    color: 'white',
    backgroundColor: '#007ffd',
    border: 'none',
    height: '44px',
    width: '185px',
    fontSize: '18px',
    marginLeft: '50px'
  }
}

/**
 * Footer component.
 * Receives the function to call back when the button is clicked.
 */
class Footer extends Component {
  constructor (props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick () {
    this.props.callbackButtonClicked()
  }

  render () {
    return (
      <footer style={style.footer} data-cy="footer">
        <button style={style.button} data-cy="footer-btn" onClick={this.handleButtonClick}>GENERATE CHART</button>
      </footer>
    )
  }
}

Footer.propTypes = {
  callbackButtonClicked: PropTypes.func
}

export default Footer
