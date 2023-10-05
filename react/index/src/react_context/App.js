import ProductList from './ProductList'
import Cart from './Cart'
import { CartProvider } from './store/cart-context'

function App() {
  return (
    <div>
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </div>
  )
}

export default App
