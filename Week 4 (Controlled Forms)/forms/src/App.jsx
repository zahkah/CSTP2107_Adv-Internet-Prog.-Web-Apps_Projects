import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from './forms/controlledforms/ControlledForm'
import UncontrolledForms from './forms/uncontrolledforms/UncontrolledForms'

function App() {

  const [isControlled, setIsControlled] = useState(false);

  if (isControlled) {
    return (
      <>
        <h1>CONTROLLED FORM</h1>
        <ControlledForm />
        <button onClick={() => setIsControlled(false)}>Toggle</button>
      </>
    )
  }

  return (
    <>
      <h1>UNCONTROLLED FORM</h1>
      <UncontrolledForms />
      <button onClick={() => setIsControlled(true)}>Toggle</button>
    </>
  )
}

export default App
