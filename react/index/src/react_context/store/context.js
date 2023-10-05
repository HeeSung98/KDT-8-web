import { createContext } from 'react'

const MyContext = createContext({
  language: '',
  setLanguage: () => {},
  thema: '',
  setThema: () => {},
})

export default MyContext
