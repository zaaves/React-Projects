import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("")

  return (
    
    <div className=' h-screen duration-300 flex justify-center items-end ' style={{backgroundColor : color}}>

        <div className=' flex gap-4 bg-slate-400 rounded-3xl justify-center py-3 px-3 mb-4'>
 
          <button className=' p-4 rounded-full bg-blue-600' onClick={() => setColor("blue")}>Blue</button>
          <button className=' p-4 rounded-full bg-red-600' onClick={() => setColor("red")}>Red</button>
          <button className=' p-4 rounded-full bg-yellow-500' onClick={() => setColor("yellow")}>Yellow</button>
          <button className=' p-4 rounded-full bg-green-500' onClick={() => setColor("green")}>Green</button>
          <button className=' p-4 rounded-full bg-pink-600' onClick={() => setColor("pink")}>Pink</button>
          <button className=' p-4 rounded-full bg-purple-600' onClick={() => setColor("purple")}>Purple</button>
          <button className=' p-4 rounded-full bg-rose-950  ' onClick={() => setColor("brown")}>Brown</button>
          <button className=' p-4 rounded-full bg-black text-white' onClick={() => setColor("black")}>Black</button>
          <button className=' p-4 rounded-full bg-white' onClick={() => setColor("white")}>White</button>
          <button className=' p-4 rounded-full bg-orange-400' onClick={() => setColor("orange")}>Orange</button>

        </div>

      </div>
   
  )
}

export default App
