import { useCallback, useState } from 'react'

export default function UseCallback2() {
  const [text, setText] = useState('')

  const onChangeText = (e) => {
    setText(e.target.value)
  }

  const onChangeTextUseCallback = useCallback((e) => {
    setText(e.target.value)
  }, [])

  return (
    <>
      <h1>useCallbackTest</h1>
      <input onChange={onChangeText} />
      <br />
      <input onChange={onChangeTextUseCallback} />
      <p>작성한 값: {text || '없음s'} </p>
    </>
  )
}
