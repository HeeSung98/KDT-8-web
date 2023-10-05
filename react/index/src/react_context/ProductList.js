import { useContext } from 'react'
import CartContext from './store/cart-context'

export default function ProductList() {
  const cartContext = useContext(CartContext)

  const productList = [
    { id: 1, name: '치킨', price: 15000 },
    { id: 2, name: '피자', price: 10000 },
    { id: 3, name: '햄버거', price: 4000 },
    { id: 4, name: '족발', price: 20000 },
    { id: 5, name: '보쌈', price: 25000 },
  ]

  return (
    <>
      <div>
        {productList.map((element) => {
          return (
            <div style={{ margin: 10 }} key={element.id}>
              <span>{element.name + ': ' + element.price}</span>
              <button
                value={element.id}
                style={{ margin: 10 }}
                onClick={(e) => {
                  cartContext.appendCart(element)
                }}
              >
                추가하기!
              </button>
              <br />
            </div>
          )
        })}
      </div>
    </>
  )
}
