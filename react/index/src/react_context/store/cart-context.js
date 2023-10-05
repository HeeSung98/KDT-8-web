import { createContext, useState } from 'react'

const CartContext = createContext({
  cart: [],
  appendCart: () => {},
})

export default CartContext

export function CartProvider(props) {
  const { cart, setCart } = useState([])

  const appendCart = (item) => {
    setCart([...cart, item])
  }

  const removeCart = (id) => {
    setCart(cart.filter((element) => element.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, appendCart, removeCart }}>
      {props.children}
    </CartContext.Provider>
  )
}
