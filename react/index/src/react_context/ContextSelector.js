import MyContext from './store/context'

export default function LanguageSelector() {
  return (
    <MyContext.Consumer>
      {(value) => {
        return (
          <div
            style={{
              backgroundColor: value.thema === 'light' ? 'white' : 'black',
            }}
          >
            <h2
              style={{
                color: value.thema === 'light' ? 'black' : 'white',
              }}
            >
              현재 선택된 언어: {value.language}
            </h2>
            <h2
              style={{
                color: value.thema === 'light' ? 'black' : 'white',
              }}
            >
              현재 선택된 테마: {value.thema}
            </h2>
            <select
              value={value.language}
              onChange={(e) => {
                value.setLanguage(e.target.value)
              }}
            >
              <option value="ko">한국어</option>
              <option value="jp">일본어</option>
              <option value="en">영어</option>
            </select>
            <select
              value={value.thema}
              onChange={(e) => {
                value.setThema(e.target.value)
              }}
            >
              <option value="light">라이트 모드</option>
              <option value="dark">다크 모드</option>
            </select>
          </div>
        )
      }}
    </MyContext.Consumer>
  )
}
