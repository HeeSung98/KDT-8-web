import React from 'react'

class RefClass2 extends React.Component {
  myInput = React.createRef()

  handleFocus = () => {
    this.myInput.current.focus()
  }

  render() {
    return (
      <>
        <p>버튼 클릭 시 인풋에 포커스 처리!!</p>

        <input ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
        <br />
      </>
    )
  }
}

export default RefClass2
