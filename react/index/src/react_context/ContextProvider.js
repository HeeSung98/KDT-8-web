import { useState } from 'react'
import MyContext from './store/context'

export default function ContextProvider(props) {
  const [language, setLanguage] = useState('ko')
  const [thema, setThema] = useState('light')
  return (
    <MyContext.Provider value={{ language, setLanguage, thema, setThema }}>
      {props.children}
    </MyContext.Provider>
  )
}
