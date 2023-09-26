import { Component } from 'react'

class eventClass extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('this:', this)
    alert('클래스형 컴포넌트')
  }

  handleClick2 = (msg) => {
    console.log('this:', this)
    alert(msg)
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>클릭</button>
        <button onClick={() => this.handleClick2(this.props.message)}>
          show message
        </button>
      </>
    )
  }
}

export default eventClass
