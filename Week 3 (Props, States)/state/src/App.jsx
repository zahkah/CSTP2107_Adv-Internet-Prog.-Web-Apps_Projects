import { useState } from 'react'
import './App.css'

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  const incrementNumber = () => {
    // count++;
    // console.log(count, 'count');
    setCount(count + 1);
  }

  const decrementNumber = () => {
    // count--;
    // console.log(count, 'count');
    setCount(count - 1);
  }

  return (
    <div className='container'>
      <button onClick={incrementNumber}>Increment</button>
      <div>{count}</div>
      <button onClick={decrementNumber}>Decrement</button>
    </div>
  )
}

export default App
