import React, { Component } from 'react'

import AceEditor from 'react-ace-builds'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-solarized_dark'

import { sampleData } from '../utils/sampleData'

const style = {
  height: '40vh',
  width: '100%',
  textEditor: {
    backgroundColor: 'black'
  }
}

class TextEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputText: sampleData
    }
  }

  printInput () {
    console.log(this.state.inputText)
  }

  render () {
    return (
      <div>
        <AceEditor
          mode="java"
          theme="solarized_dark"
          name="UNIQUE_ID_OF_DIV"
          height={style.height}
          width={style.width}
          fontSize={18}
          showPrintMargin={false}
          setOptions={{
            fontFamily: 'Source Code Pro'
          }}
          value={this.state.inputText}
        />
        <input type="button" onClick={this.printInput.bind(this)} />
      </div>
    )
  }
}

export default TextEditor
