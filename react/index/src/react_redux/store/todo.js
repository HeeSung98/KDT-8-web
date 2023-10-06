import { createStore } from 'redux'

export const APPEND_TODO = 'append'
export const REMOVE_TODO = 'remove'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'append':
      state.push(action.value)
      return state
    case 'remove':
      state = state.filter((element, idx) => {
        if (action.value !== idx) {
          console.log(element)
          return element
        }
      })
      console.log('야야', state)
      return state
    default:
      return state
  }
}

const todoStore = createStore(todoReducer)
export default todoStore
