import { Component } from 'react'

class ColorChange extends Component {
  state = {
    text: '검정색 글씨',
    color: 'black',
    text2: '사라져라',
  }

  red = () => {
    this.setState((prevState) => ({
      text: '빨간색 글씨',
      color: 'red',
    }))
  }
  blue = () => {
    this.setState((prevState) => ({
      text: '파란색 글씨',
      color: 'blue',
    }))
  }
  disappear = () => {
    this.setState((prevState) => ({
      text2: '',
    }))
  }

  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>{this.state.text}</h1>
        <button onClick={this.red}>빨간색</button>
        <button onClick={this.blue}>파란색</button>
        <br />
        <h1>{this.state.text2}</h1>
        <button onClick={this.disappear}>사라져라</button>
      </>
    )
  }
}

export default ColorChange
