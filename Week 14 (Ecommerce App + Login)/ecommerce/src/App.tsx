import { useNavigate, useRoutes } from 'react-router-dom'
import './App.css'
import SigninPage from './pages/SigninPage'
import SignupPage from './pages/SignupPage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import UserContext, { INITIAL_VALUE } from './context/UserContext'
import { useEffect, useState } from 'react'
import ProductsContext, { INITIAL_PRODUCT } from './context/ProductsContext'
import CreatedProductsPage from './pages/CreatedProductsPage'
import ExistingProductsPage from './pages/ExistingProductsPage'
import FavoriteProductsPage from './pages/FavoriteProductsPage'

function App() {

  const [userData, setUserData] = useState(INITIAL_VALUE.userData);
  const [productsData, setProductsData] = useState(INITIAL_PRODUCT.productsData);
  
  const navigate = useNavigate();
  

  // Fix this doens't let user go to signup page page as well.
  // useEffect(() => {
  //   if (!localStorage.getItem('current-user')) {
  //     navigate('/');
  //   } 
  // }, [])

  // Protected Routes and Non Protected Routes

  // SIGNIN PAGE
  // SIGNUP PAGE
  // HOME PAGE
  const routes = useRoutes([
    {
      path: '/', element: <SigninPage />
    },
    {
      path: '/signup', element: <SignupPage />
    },
    {
      path: '/home', element: <HomePage />
    },
    {
      path: '/createdProducts', element: <CreatedProductsPage />
    },
    {
      path: '/existingProducts', element: <ExistingProductsPage />
    },
    {
      path: '/favoriteProducts', element: <FavoriteProductsPage />
    }
  ])

  return (
    <>
      <UserContext.Provider value={{
        userData,
        setUserData
      }}>
        <ProductsContext.Provider value={{
          productsData,
          setProductsData
        }}>
          <Navbar />
          {routes}
        </ProductsContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App

// BUGS
// If not logged in, dont let the user go to home page.
// Unexpected end of JSON input
// Signout but is not visioble even if the user is logged in