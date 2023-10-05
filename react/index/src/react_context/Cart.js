import { useContext } from 'react'
import CartContext from './store/cart-context'

export default function Cart() {
  const { cart, removeCart } = useContext(CartContext)

  return (
    <div>
      <h2>장바구니</h2>
      {cart.map((element, idx) => {
        return (
          <div style={{ margin: 10 }} key={idx}>
            <span>{element.name + ': ' + element.price}</span>
            <button
              value={element.id}
              style={{ margin: 10 }}
              onClick={(e) => {
                removeCart(idx)
              }}
            >
              제거하기!
            </button>
            <br />
          </div>
        )
      })}
    </div>
  )
}
