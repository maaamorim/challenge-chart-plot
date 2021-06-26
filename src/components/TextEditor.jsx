import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (val) {
    this.setState({ inputText: val })
  }

  handleSubmit () {
    this.props.callbackTextSubmitted(this.state.inputText)
  }

  render () {
    return (
      <div>
        <AceEditor
          mode="java"
          theme="solarized_dark"
          name="text_editor_Vd2wXaiLEnFRFcR"
          focus={true}
          height={style.height}
          width={style.width}
          fontSize={18}
          showPrintMargin={false}
          setOptions={{
            fontFamily: 'Source Code Pro'
          }}
          style={{
            backgroundColor: '#2e3440'
          }}
          value={this.state.inputText}
          onChange={this.handleChange}
          onBlur={this.handleSubmit}
        />
      </div>
    )
  }
}

TextEditor.propTypes = {
  callbackTextSubmitted: PropTypes.func
}

export default TextEditor
