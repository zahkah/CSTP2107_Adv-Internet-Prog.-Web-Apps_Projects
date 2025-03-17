import { useEffect } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage';

function App() {


  const { isLoading, data, error} = useFetch('https://reqres.in/api/users', {});
  const [value, setValue] = useLocalStorage('users', {});
  if (isLoading) {
    return <div>Data is Loading....</div>
  }

  if (error) {
    return <div>Something went wrong</div>
  }
  
  const updateLocalStorage = () => {
    if (data) {
     setValue(data.data); 
    }
  }

  return (
   <div>
      {
       data &&  data.data.map((obj, index) => <div key={index}>{obj.first_name}</div>)
      }

      <button onClick={updateLocalStorage}>Update</button>
   </div>
  )
}

export default App
