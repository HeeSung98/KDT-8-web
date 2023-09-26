import { useRef } from 'react'

function RefFunction() {
  const idRef = useRef(1)

  const plusIdRef = () => {
    idRef.current += 1
    console.log(idRef.current)
  }

  return (
    <>
      <p>useRef 로컬변수 사용</p>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>focus</button>
    </>
  )
}

export default RefFunction
