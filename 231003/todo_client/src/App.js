import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [id, setId] = useState(5)
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('useEffect')
    const todoData = async () => {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:8000/todos',
      })
      console.log(res.data.data)
      setTodos(res.data.data)
      setLoading(false)
    }
    todoData()
  }, [])

  const appendTodo = async () => {
    console.log(
      ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ appendTodo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
    )

    const data = {
      id,
      title: document.querySelector('#title').value,
      done: false,
    }
    console.log('data:', data)

    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8000/todo',
      data,
    })
    const resData = res.data
    console.log('resData:', resData)

    document.querySelector('#title').value = ''
    setId(id + 1)
    setTodos(resData.data)
  }

  const deleteTodo = async (id) => {
    console.log(
      ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ deleteTodo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
    )

    const res = await axios({
      method: 'DELETE',
      url: `http://localhost:8000/todo/${id}`,
    })
    const resData = res.data
    console.log('resData:', resData)
    setTodos(resData.data)
  }

  const modifyTodo = async (e, id) => {
    if (e.key === 'Enter') {
      console.log(
        ' ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ modifyTodo ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ '
      )

      const data = {
        id,
        title: document.getElementById(id).value,
        done: false,
      }

      const res = await axios({
        method: 'PATCH',
        url: `http://localhost:8000/todo/${id}`,
        data,
      })
      const resData = res.data
      console.log('resData:', resData)
    }
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <input
            id="title"
            style={{ margin: 10 }}
            placeholder="add your todo!"
          />
          <button onClick={appendTodo}>추가하기</button>
          <br />
          {todos.map((value) => {
            return (
              <>
                <input
                  key={'check' + value.id}
                  type="checkbox"
                  style={{ margin: 10 }}
                  name={value.id}
                  onChange={(e) => {
                    document.getElementById(e.target.name).readOnly =
                      !e.target.checked
                  }}
                />
                <input
                  key={'title' + value.id}
                  style={{ width: 250 }}
                  id={value.id}
                  defaultValue={value.title}
                  readOnly={true}
                  onKeyDown={(e) => modifyTodo(e, value.id)}
                />
                <button
                  key={'append' + value.id}
                  onClick={() => deleteTodo(value.id)}
                  style={{ margin: 10 }}
                >
                  삭제하기
                </button>
                <br />
              </>
            )
          })}
        </>
      )}
    </div>
  )
}

export default App
