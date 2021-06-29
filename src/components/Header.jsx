import React, { Component } from 'react'

import { SCREEN_SIZE_DIVISON } from '../utils/constants'

const style = {
  mainDiv: {
    backgroundColor: '#dddee1',
    height: SCREEN_SIZE_DIVISON.header,
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    margin: 0,
    fontSize: '26px',
    color: '#2e3543',
    paddingLeft: '50px'
  }
}
/**
 * Header component.
 * Simple header with a text.
 */
class Header extends Component {
  render () {
    return (
      <div style={style.mainDiv}>
        <h2 style={style.text}>Mateus Amorim&apos;s Challenge</h2>
      </div>
    )
  }
}

export default Header
