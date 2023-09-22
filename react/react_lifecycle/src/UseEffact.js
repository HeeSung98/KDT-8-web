import { useState, useEffect } from 'react'

function MyComponent2({ number }) {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('계속나오네;;')
  })

  useEffect(() => {
    console.log('생성될때만 나오네;;;')

    return () => {
      console.log('제거될 때만 실행됨;;')
    }
  }, [])

  useEffect(() => {
    console.log('state가 변경될 때;')
  }, [text])

  return (
    <>
      MyComponent2 {number}
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </>
  )
}

export default function UseEffect() {
  const [number, setNumber] = useState(0)
  const [visible, setVisible] = useState(true)

  const changeNumberState2 = () => {
    setNumber(number + 1)
  }
  const changeVisibleState2 = () => {
    setVisible(() => !visible)
  }

  return (
    <>
      <button onClick={changeNumberState2}>plus</button>
      <button onClick={changeVisibleState2}>on/off</button>
      <br />
      {visible && <MyComponent2 number={number} />}
    </>
  )
}
