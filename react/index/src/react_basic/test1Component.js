import { Component } from 'react'

class test1Component extends Component {
  render() {
    const name = '윤희성'
    const mystyle = {
      backgroundColor: 'blue',
      color: 'orange',
      fontSize: 40,
      padding: 12,
    }
    return (
      <>
        <div style={mystyle}>안녕하세요 저는 {name}입니다</div>
      </>
    )
  }
}

export default test1Component
