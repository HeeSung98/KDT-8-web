import { Component } from 'react'
import green from './img/잔디.png'

class Test2Component extends Component {
  render() {
    const style = {
      color: 'orange',
      fontSize: 40,
      marginTop: 12,
    }
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
        </div>
        <div style={style}>
          <img src={green} width="400px" alt="어오" />
        </div>
      </>
    )
  }
}

export default Test2Component
