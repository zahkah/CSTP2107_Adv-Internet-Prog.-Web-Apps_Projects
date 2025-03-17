import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Child from './Components/Child';

function App() {

  const array = [1,2,3,4,5,6,7,8,9];

  console.log('Parent Component Re-rendered');

  const [parentValue, setParentValue] = useState(0);
  const [childValue, setChildValue] = useState(0);
  const [arrayValue, setArrayValue] = useState(array);

  const expensiveMathematicalCalculation = () => {
    console.log('Expensive Calculation Performed');
    return Math.max(...arrayValue);
  }

  const memoizedCalculatedValue = useMemo(() => expensiveMathematicalCalculation(), [arrayValue])

  const changeParentValue = () => {
    setParentValue(parentValue + 1);
    setArrayValue([2,3,4]);
  }

  const changeChildValue = (randomValue) => {
    setChildValue(randomValue)
  }

  const memoizedChangeChildValue = useCallback((randomValue) => changeChildValue(randomValue), [])

  return (
    <div>
      <h1>Parent Value : {parentValue}</h1>
      <Child changeChildValue={memoizedChangeChildValue} childValue={childValue} />
      <h1>Maximum Value: {memoizedCalculatedValue}</h1>
      <button onClick={changeParentValue}>Change Parent Value</button>
    </div>
  )
}

export default App
