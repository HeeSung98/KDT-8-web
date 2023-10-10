import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './react_redux/App'
// import { createElement } from 'react'
// import { createStore } from 'redux'
import App from './react_context/App'
import { Provider } from 'react-redux'
import Store from './react_redux/store/todo'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Provider store={Store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
)

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const plus = document.querySelector('#plus')
// const minus = document.querySelector('#minus')
// const num = document.querySelector('#num')

// const storeReducer = (state = 0, action) => {
//   console.log('state:', state)
//   console.log('action:', action)
//   switch (action.type) {
//     case 'plus':
//       return state + 1
//     case 'minus':
//       return state - 1
//     default:
//       return state
//   }
// }

// const store = createStore(storeReducer)
// store.subscribe(() => {
//   num.textContent = store.getState()
// })

// //let count = 0

// plus.addEventListener('click', () => {
//   // count = count + 1
//   // console.log(count)
//   store.dispatch({ type: 'plus' })
// })

// minus.addEventListener('click', () => {
//   // count = count - 1
//   // console.log(count)
//   store.dispatch({ type: 'minus' })
// })

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// const todo = document.querySelector('#todo')
// const append = document.querySelector('#append')
// const todoList = document.querySelector('#todoList')

// const todoReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'append':
//       state.push(action.value)
//       return state
//     case 'remove':
//       state = state.filter((element, idx) => {
//         if (action.value !== idx) {
//           console.log(element)
//           return element
//         }
//       })
//       console.log('야야', state)
//       return state
//     default:
//       return state
//   }
// }

// const todoStore = createStore(todoReducer)
// todoStore.subscribe(() => {
//   console.log('getState():', todoStore.getState())
//   todoList.innerHTML = ''

//   todoStore.getState().map((element, idx) => {
//     const li = document.createElement('li')
//     li.textContent = element
//     const button = document.createElement('button')
//     button.innerText = '삭제'
//     button.addEventListener('click', () => remove(idx))
//     li.appendChild(button)
//     return todoList.appendChild(li)
//   })
// })

// append.addEventListener('click', () => {
//   todoStore.dispatch({ type: 'append', value: todo.value })
//   todo.value = ''
// })

// function remove(idx) {
//   todoStore.dispatch({ type: 'remove', value: idx })
// }
