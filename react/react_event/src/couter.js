import { Component } from 'react'

class Counter extends Component {
  //   constructor(props) {
  //     super(props)

  //     this.state = {
  //       number: 0,
  //     }

  //     this.handleIncrement = this.handleIncrement.bind(this)
  //     this.handleDecrement = this.handleDecrement.bind(this)
  //   }
  state = {
    number: 0,
  }

  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 })
  }
  handleDecrement = () => {
    // this.setState({ number: this.state.number - 1 })
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }))
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }))
  }

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    )
  }
}

export default Counter
