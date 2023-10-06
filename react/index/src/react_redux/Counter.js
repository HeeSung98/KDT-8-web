import { useDispatch, useSelector } from 'react-redux/'
import { countAction } from './store/redux-toolkit'

export default function Counter() {
  const counter = useSelector((state) => state.counterReducer.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>state value: {counter}</h2>
      <button
        onClick={(e) => {
          dispatch(countAction.increment5(5))
        }}
        style={{ margin: 10 }}
      >
        increment 5
      </button>
      <button
        onClick={(e) => {
          dispatch(countAction.increment())
        }}
        style={{ margin: 10 }}
      >
        increment 1
      </button>
      <button
        onClick={(e) => {
          dispatch(countAction.decrement())
        }}
        style={{ margin: 10 }}
      >
        decrement 1
      </button>
      <button
        onClick={(e) => {
          dispatch(countAction.decrement5({ ten: 10, five: 5 }))
        }}
        style={{ margin: 10 }}
      >
        decrement 5
      </button>
    </div>
  )
}
