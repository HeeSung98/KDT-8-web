import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from './store/redux-toolkit'

export default function Login() {
  const login = useSelector((state) => state.loginReducer.isLogin)

  const dispatch = useDispatch()

  return (
    <>
      {login ? (
        <>
          <div>로그인 하셨습니다!!!</div>
          <button onClick={() => dispatch(loginAction.logout())}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <div>로그아웃</div>
          <button onClick={() => dispatch(loginAction.login())}>로그인</button>
        </>
      )}
    </>
  )
}
