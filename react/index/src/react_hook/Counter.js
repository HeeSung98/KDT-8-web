import { useState } from 'react'

export default function Counter() {
  const [number, setNumber] = useState(0)
  console.log(number)

  const handleIncremet = () => {
    setNumber(number + 1)
  }
  const handleDecremet = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncremet}>증가</button>
      <button onClick={handleDecremet}>감소</button>
    </div>
  )
}
