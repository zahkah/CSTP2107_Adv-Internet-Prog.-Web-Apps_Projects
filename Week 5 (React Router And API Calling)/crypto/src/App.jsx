import { useRoutes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CryptoDetailPage from './pages/CryptoDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {


  // Home Page - Table - Crypto coins 
  // CryptoPageDetails = website.com/cryptodetails/bitcoin
  // Not Found Page

  // let element = 

  let element = useRoutes(
    [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/crypto/:coin',
        element: <CryptoDetailPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  )

  return element;
}

export default App
