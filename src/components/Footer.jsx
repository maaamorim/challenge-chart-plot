import React, { Component } from 'react'
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
  render () {
    return (
      <footer style={style.footer}>
        <Button variant='contained' color='primary' style={style.button}>GENERATE CHART</Button>
      </footer>
    )
  }
}

export default Footer
