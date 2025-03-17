import './App.css'
import { useRoutes } from 'react-router-dom';
import SignInPage from './pages/Signin';
import SignupPage from './pages/Signup';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  // React Router Setup

  const routes = useRoutes([
    {
      path: '/',
      element: <SignInPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/home',
      element: <HomePage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }

  ])

  return routes;

}

export default App
