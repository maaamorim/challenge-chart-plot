import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'

const style = {
  footer: {
    backgroundColor: '#dddee1',
    height: '8vh',
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    color: 'white',
    fontSize: '18px',
    marginLeft: '50px'
  }
}

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
      <footer style={style.footer}>
        <Button variant='contained' color='primary' style={style.button} onClick={this.handleButtonClick}>GENERATE CHART</Button>
      </footer>
    )
  }
}

Footer.propTypes = {
  callbackButtonClicked: PropTypes.func
}

export default Footer
