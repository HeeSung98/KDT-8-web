import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import Test1Component from './test1Component'
import Test2Component from './test2'

function App() {
  return (
    <>
      <ClassComponent food="치킨"></ClassComponent>
      <FunctionComponent title="책" author="윤희성" price={9800} type="타입" />
      <Test1Component></Test1Component>
      <Test2Component></Test2Component>
    </>
  )
}

export default App
