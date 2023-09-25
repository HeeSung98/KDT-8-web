import { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectAxiosChild() {
  const [userList, setUserList] = useState([])

  //useEffect(() => {})

  useEffect(() => {
    const getUser = async () => {
      const respone = await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
      })

      console.log(respone.data)
      setUserList(respone.data)
    }
    getUser()
  }, [])

  //useEffect(() => {}, [userList])

  return (
    <>
      <ul>
        {userList.map((val) => {
          return <li>{val.id}</li>
        })}
      </ul>
    </>
  )
}

export default function UseEffectAxios() {
  return (
    <>
      <UseEffectAxiosChild />
    </>
  )
}
