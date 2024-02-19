import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const addValue = () => {
    if(count >= 20){
      // count = 20
    }
    else{
      setCount(count + 1)
    }
  }
  const removeValue = () => {
    if(count <= 0){
      // count = 0
    }
    else{
      setCount(count - 1)
    }
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Hello Owais : {count}</h2>

      <button
      onClick={addValue}
      >Plus</button>
      
      <button
      onClick={removeValue}
      >minus</button>

      <button
      onClick={reset}
      >Reset</button>
      <h2>Count : {count}</h2>
    </>
  )
}

export default App
