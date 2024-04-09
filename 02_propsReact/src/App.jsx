import { useState } from 'react'
import React from 'react'
import'./App.css'
import Card from './Components/Card.jsx'


function App() {
  let myobj = {
    username : "Mohammad",
    age : 22
  }
  let myArr = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-red-500 text-5xl'>Tailwind text</h1>
      <Card username = "chai aur code"   />
      <Card someobj = {myobj.username}/>
      <Card arr = {myArr} />
    </>
  )
}

export default App
