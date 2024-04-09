import { useState } from 'react'
import React from 'react'
import './App.css'


function App() {
  let [count, setcount] = useState(0);

  function update(){
    setcount(count = count+1);    
  }
  return (
    <>
      <div className="w-full h-full bg-green-600">
        <div className="bg-white h-11"></div>
      </div>
    </>
  )
}

export default App
