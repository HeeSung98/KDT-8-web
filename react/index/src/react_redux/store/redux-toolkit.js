import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increment5(state, action) {
      console.log(action)
      state.counter += action.payload
    },
    decrement5(state, action) {
      console.log(action)
      const { ten } = action.payload
      state.counter -= ten
    },
  },
})

const initLogin = { isLogin: false }
const loginSlice = createSlice({
  name: 'login',
  initialState: initLogin,
  reducers: {
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    },
  },
})

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    loginReducer: loginSlice.reducer,
  },
})

export const countAction = counterSlice.actions
export const loginAction = loginSlice.actions

export default store
