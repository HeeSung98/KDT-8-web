import { useState } from 'react'

export default function BoardFunction() {
  const [boardList, setBoardList] = useState([])
  const [searchedBoardList, setSearchedBoardList] = useState([])
  const [board, setBoard] = useState([])
  const [bNo, setBNo] = useState(1)

  const register = () => {
    const writer = document.getElementById('writer')
    const content = document.getElementById('content')

    setBNo(bNo + 1)

    boardList.push({
      bNo,
      writer: writer.value,
      content: content.value,
    })
    setBoardList(boardList)
    setBoard(boardList)

    writer.value = ''
    content.value = ''
  }

  const search = () => {
    const option = document.getElementById('option').selectedIndex
    const searchWord = document.getElementById('searchValue')
    console.log('option:', option)
    console.log('searchValue:', searchWord.value)

    let result
    switch (option) {
      case 0:
        result = boardList.filter((val) => {
          return val.writer.includes(searchWord.value)
        })
        setSearchedBoardList(result)
        break
      case 1:
        result = boardList.filter((val) => {
          return val.content.includes(searchWord.value)
        })
        setSearchedBoardList(result)
        break
      default:
        break
    }
    setBoard(searchedBoardList)
  }

  return (
    <>
      작성자: <input id="writer"></input> 내용: <input id="content"></input>
      <button onClick={register}>작성</button>
      <br />
      <hr></hr>
      <select id="option">
        <option>작성자</option>
        <option>내용</option>
      </select>
      <input placeholder="검색어" id="searchValue"></input>
      <button onClick={search}>검색</button>
      <hr></hr>
      <table id="table" border={1}>
        <tr>
          <th>번호</th>
          <th>작성자</th>
          <th>내용</th>
        </tr>
        {board.map((element, idx) => {
          return (
            <tr>
              <td>{element.bNo}</td>
              <td>{element.writer}</td>
              <td>{element.content}</td>
            </tr>
          )
        })}
      </table>
      <br />
      <br />
    </>
  )
}
