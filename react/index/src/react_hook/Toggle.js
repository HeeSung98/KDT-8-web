import { useState } from 'react'

export default function Toggle() {
  const [flag, setFlag] = useState(false)
  const [text, setText] = useState('보여라')

  const handleToggle = () => {
    if (flag === false) {
      setFlag(true)
      setText('사라져라')
    } else {
      setFlag(false)
      setText('보여라')
    }
  }

  return (
    <div>
      <p>{flag && '안녕하세요'} </p>
      <button onClick={handleToggle}>{text}</button>
    </div>
  )
}
