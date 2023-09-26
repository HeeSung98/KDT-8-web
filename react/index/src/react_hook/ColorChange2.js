import { useState } from 'react'

export default function ColorChange2() {
  const [color, setColor] = useState('black')
  const [text, setText] = useState('검정색')

  const changeRed = () => {
    setColor('red')
    setText('빨간색')
  }

  const changeBlue = () => {
    setColor('blue')
    setText('파란색')
  }

  return (
    <div>
      <h1 style={{ color }}>{text} 글자</h1>
      <button onClick={changeRed}>빨간색</button>
      <button onClick={changeBlue}>파란색</button>
      <br />
      <br />
    </div>
  )
}
