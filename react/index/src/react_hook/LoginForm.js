import { useState } from 'react'

export default function LoginForm({ state, dispatch }) {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const userInfo = { testId: 'banana', testPw: '1234' }

  const handleLoginForm = (e) => {
    e.preventDefault()

    if (id === userInfo.testId && pw === userInfo.testPw) {
      dispatch({ type: 'LOGIN_SUCCESS' })
    } else {
      dispatch({ type: 'LOGIN_FAILURE' })
    }
  }

  return (
    <form action="" onSubmit={handleLoginForm}>
      <label htmlFor="id">ID</label>
      <input id="id" type="text" onChange={(e) => setId(e.target.value)} />
      <br />

      <label htmlFor="pw">PW</label>
      <input id="pw" type="password" onChange={(e) => setPw(e.target.value)} />
      <br />

      <button>Login</button>
      <br />

      <p>{state.message}</p>
    </form>
  )
}
