import { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  height: 100px;
`

const Circle = styled(Box)`
  border-radius: 50px;
`

const Btn = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
`

const NeastBox = styled.div`
  background-color: aquamarine;
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;

  p {
    color: red;
    font-weight: 900;

    &:hover {
      color: aquamarine;
    }
  }
`

const _Input = styled.input.attrs({ require: true })``

export default function StyledComponents() {
  const [flag, setFlag] = useState(true)

  return (
    <div>
      <Box color="blue" />
      <Circle color="pink" />
      <Btn as="a" href="https://www.naver.com">
        클릭
      </Btn>
      <NeastBox>
        <p>야야야야!!</p>
      </NeastBox>
      <Btn color={flag ? 'pink' : 'blue'}>색상 변경</Btn>
    </div>
  )
}
