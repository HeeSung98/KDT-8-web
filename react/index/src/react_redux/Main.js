import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { APPEND_TODO } from './store/todo'

export default function Main() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const todos = useSelector((state) => state)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: APPEND_TODO, text })
    setText('')
  }

  return (
    <>
      <h2>To Do</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={{ margin: 10 }} id="append">
        추가
      </button>
      <ul id="todoList"></ul>
    </>
  )
}
