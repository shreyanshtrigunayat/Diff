import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setcounter] = useState(15)

  // let counter = 15
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1
    setcounter(counter + 1)
  }

  const removeValue = () => {
    setcounter(counter - 1)
  }
  return (
    <>
      <h1> Goood Morning </h1>
      <h2> Counter value : {counter} </h2>
      <button
        onClick={addValue}
      > Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      > remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
