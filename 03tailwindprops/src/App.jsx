import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1 className='bg-gray-400 text-black p-4 rounded-xl '> tailwind test</h1>


      <Card username="Goodnight" btnText="click me" />
      <Card username="GoodMorning" btnText="visit me" />


    </>
  )
}

export default App
