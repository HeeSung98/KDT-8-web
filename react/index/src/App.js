import './App.css'

function App() {
  const user = [
    { id: 1, name: '김밥', age: 25, vip: true },
    { id: 2, name: '라면', age: 25, vip: true },
    { id: 3, name: '핫바', age: 25, vip: false },
    { id: 4, name: '떡볶이', age: 25, vip: false },
    { id: 5, name: '튀김', age: 25, vip: true },
  ]

  const vip = user.filter((val) => {
    return val.vip
  })
  return (
    <>
      <ol>
        {vip.map((val, idx) => {
          return <li key={idx}>{val.name}</li>
        })}
      </ol>
    </>
  )
}

export default App
