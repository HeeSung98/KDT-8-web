import { useMemo, useState } from 'react'

export default function UseMemo() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const calc = useMemo(() => {
    console.log(
      ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ calc ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
    )
    for (let i = 0; i < 10000000; i++) {
      return count * 2
    }
  }, [count])

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count} </p>
      <p>Double Count: {calc} </p>
    </>
  )
}
