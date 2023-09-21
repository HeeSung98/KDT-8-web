import { useState } from 'react'

export default function ToDo() {
  const [toDoList, setToDoList] = useState([])

  const appendToDo = () => {
    const toDo = document.querySelector('#toDo')
    const tmp = toDoList

    tmp.push(toDo.value)
    console.log('tmp:', tmp)

    if (tmp.length > 10) {
      alert('할 일이 너무 많습니다!!')
    }

    toDo.value = ''
    setToDoList(tmp)
  }

  const removeToDo = () => {
    const toDoCheck = document.getElementsByName('toDoCheck')
    const checkedList = []
    const tmpToDoList = toDoList

    for (var i = 0; i < toDoCheck.length; i++) {
      if (toDoCheck[i].checked) {
        checkedList.push(toDoCheck[i].value)
      }
    }
    console.log('checkedList:', checkedList)
    for (var j = 0; j < checkedList.length; j++) {
      var data = checkedList[j]
      var idx = tmpToDoList.findIndex((element) => {
        return element == data
      })
      tmpToDoList.splice(idx, 1)
    }

    console.log('tmpToDoList:', tmpToDoList)
    setToDoList(tmpToDoList)
  }

  return (
    <>
      <input id="toDo" placeholder="할 일을 적어주세요!!!" />
      <button onClick={appendToDo}>추가</button>
      <ul>
        {toDoList.map((element) => {
          return (
            <li>
              <input type="checkBox" name="toDoCheck" value={element}></input>
              {element}
            </li>
          )
        })}
      </ul>
      <button onClick={removeToDo}>완료한 일 삭제!!</button>
    </>
  )
}
