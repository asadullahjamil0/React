import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("Red")

  return (
    <>
      <div><h2>Count: {count}</h2></div>
      <button onClick={()=>{setCount(count + 1)}}>Increment Count</button>
      <br />
      <br />
      <button onClick={()=>{setCount(count - 1)}}>Decrement Count</button>
      <h1>My favourite color is {color}</h1>
      <button onClick={()=>{setColor("Blue")}}>Change to Blue</button>
      <button onClick={()=>{setColor("Red")}}>Change to Red</button>
      <button onClick={()=>{setColor("Yellow")}}>Change to Yellow</button>
      <button onClick={()=>{setColor("Orange")}}>Change to Orange</button>
    </>
  )
}

export default App
