import React, { Component } from 'react'

const style = {
  mainDiv: {
    backgroundColor: '#dddee1',
    height: '8vh',
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
