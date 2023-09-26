import green from './img/잔디.png'

function FunctionComponent({ title, author, price, type }) {
  const back = {
    backgroundColor: 'yellow',
    width: 200,
    height: 300,
    textAlign: 'center',
  }
  const titleStyle = {
    color: 'orange',
    fontSize: 40,
  }
  const left = {
    marginLeft: 10,
    textAlign: 'left',
  }
  const bold = {
    fontSize: 25,
  }
  return (
    <>
      <div style={back}>
        <span style={titleStyle}>{title}</span>
        <br />
        <img src={green} style={{ width: 150 }} alt="어오" />
        <br />
        <span style={bold}>나의 하루는 힘들다</span>
        <br />
        <div style={left}>저자: {author}</div>
        <br />
        <div style={left}>기격: {price}</div>
        <br />
        <div style={left}>구분: {type}</div>
      </div>
    </>
  )
}

export default FunctionComponent
