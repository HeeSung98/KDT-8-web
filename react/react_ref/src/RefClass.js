import React from 'react'

class RefClass extends React.Component {
  handleFocus = () => {
    this.myInput.focus()
  }
  render() {
    return (
      <>
        <p>버튼 클릭 시 인풋에 포커스 처리!!</p>

        <input ref={(param) => (this.myInput = param)} />
        <button onClick={this.handleFocus}>focus</button>
        <br />
      </>
    )
  }
}

export default RefClass
