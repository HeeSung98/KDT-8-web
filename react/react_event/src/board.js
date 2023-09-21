import { Component } from 'react'

class Board extends Component {
  constructor(props) {
    super(props)

    this.boardList = []
    this.searchedBoardList = []

    this.state = {
      bNo: 1,
      result: [],
    }

    this.register = this.register.bind(this)
    this.search = this.search.bind(this)
  }

  register() {
    const writer = document.getElementById('writer')
    const content = document.getElementById('content')

    this.boardList.push({
      bNo: this.state.bNo,
      writer: writer.value,
      content: content.value,
    })
    this.setState((prevState) => ({
      bNo: prevState.bNo + 1,
      result: this.boardList,
    }))

    writer.value = ''
    content.value = ''
  }

  search() {
    const option = document.getElementById('option').selectedIndex
    const searchWord = document.getElementById('searchValue')
    console.log('option:', option)
    console.log('searchValue:', searchWord.value)

    let result
    switch (option) {
      case 0:
        result = this.boardList.filter((val) => {
          return val.writer.includes(searchWord.value)
        })
        this.searchedBoardList = result
        break
      case 1:
        result = this.boardList.filter((val) => {
          return val.content.includes(searchWord.value)
        })
        this.searchedBoardList = result
        break
      default:
        break
    }

    this.setState((prevState) => ({
      result: this.searchedBoardList,
    }))

    console.log('searchedBoardList:', this.searchedBoardList)
    searchWord.value = ''
  }

  render() {
    return (
      <>
        작성자: <input id="writer"></input> 내용: <input id="content"></input>
        <button onClick={this.register}>작성</button>
        <br />
        <hr></hr>
        <select id="option">
          <option>작성자</option>
          <option>내용</option>
        </select>
        <input placeholder="검색어" id="searchValue"></input>
        <button onClick={this.search}>검색</button>
        <hr></hr>
        <table id="table" border={1}>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>내용</th>
          </tr>
          {this.state.result.map((element, idx) => {
            return (
              <tr>
                <td>{element.bNo}</td>
                <td>{element.writer}</td>
                <td>{element.content}</td>
              </tr>
            )
          })}
        </table>
      </>
    )
  }
}

export default Board
