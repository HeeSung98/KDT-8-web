import { Component } from 'react'

class MyComponent extends Component {
  componentDidMount() {
    console.log('mount!')
  }

  componentDidUpdate() {
    console.log('update!')
  }

  componentWillUnmount() {
    console.log('unmount!')
  }

  render() {
    return (
      <>
        <div>MyComponent {this.props.number}</div>
      </>
    )
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  }

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 })
  }
  changeVisibleState = () => {
    this.setState({ visible: this.state.visible ? false : true })
  }

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>plus</button>
        <button onClick={this.changeVisibleState}>on/off</button>
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    )
  }
}

export default LifeCycleClass
