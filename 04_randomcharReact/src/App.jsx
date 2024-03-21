import { useState, useCallback, useEffect, useRef } from 'react'
import React from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllow, setNum] = useState(false)
  const [charAllow, setChar] = useState(false)
  const [pass, setPass] = useState("");

  //ref hook
  const passwordRef = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) {
      str += '0123456789'
    }
    if (charAllow) {
      str += '!@#$%^&*()_+=-[]{}~`'
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPass(pass)

  }, [length, numberAllow, charAllow, setPass])

  const copyPasstoClip = useCallback(() => {
    passwordRef.current?.select(); 
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(pass);
  },[pass])

  useEffect(() => {
    passwordGen();
  }, [length, numberAllow, charAllow, passwordGen])

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        <div className='flex shadow rounded-lg overflow-hidden py-4 gap-2'>
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 rounded-md"
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasstoClip}
            className='outline-none bg-blue-700 text-white px-3 py-2 shrink-0 rounded-md px-'
          >Copy</button>
        </div>
        <div className='flex gap-2  px-2 py-4 text-xl'>
          <div className='flex items-center gap-x-1 '>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>
              Length : {length}
            </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div
            className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
