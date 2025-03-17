import { useEffect, useState } from 'react'
import './App.css'
import { Product } from './types';
import { getProductsList } from './util';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {

  const [productList, setProductList] = useState<Product[]>([]);
  const [cartList, setCartList] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
    getProductsList().then((products) => {
      setProductList(products);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    console.log(cartList, 'cartList')
  }, [cartList])

  const handleCartList = (product: Product) => {
    setCartList((prevItems) => {

      // Find the cart items
      const isProductFound = cartList.find((prevProduct) => prevProduct.id === product.id);

      // If the product is found then update the amount
      if (isProductFound) {
        return prevItems.map((productItem) => {
          if (product.id === productItem.id) {
            return {
              ...productItem,
              amount: productItem.amount + 1
            }
          }
          return productItem;
        })
      }

      // If the product is not found, add a new product to cartItems
      return [...prevItems, { ...product, amount: 1 }]
    })
  }

  const handleCartOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="bg-white mb-8 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button onClick={handleCartOpen} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
              View Cart
            </button>
          </div>
        </div>
      </nav>
      <div className='grid grid-cols-4 gap-4'>
        <ProductList products={productList} handleCartList={handleCartList} />
      </div>

      <CartList isOpen={isOpen} handleIsOpen={handleCartOpen} cartList={cartList} />
    </>
  )
}

export default App
