function eventFunction() {
  const handleCilck = () => {
    alert('클릭했습니다.')
  }

  const handleCilck2 = (str) => {
    alert(str)
  }

  return (
    <>
      <button onClick={handleCilck}>클릭</button>
      <button onClick={() => handleCilck2('크아아아악')}>클릭</button>
    </>
  )
}

export default eventFunction
