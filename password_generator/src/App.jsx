import { useEffect, useState } from 'react'
import './App.css'

function App() {
let [length,setlength]=useState(8)
let [no,setno]=useState(false)
let [char,setchar]=useState(false)
let [password,setpassword]=useState("")

const Setpassword=()=>{
  let pass=""
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(no) str+='0123456789'
  if(char) str+='!@#$%^&*()'
  for(let i=1;i<=length;i++){
  let char=Math.floor(Math.random() * str.length+1)
  pass+=str.charAt(char)
  }
  setpassword(pass)
}
const copytoclipboard=()=>{
  window.navigator.clipboard.writeText(password);
}
useEffect(()=>Setpassword(),[length,no,char])
  return (
    <>
     <div className='bg-gray-400 w-xl h-50 rounded-2xl flex flex-col mx-auto my-10 p-4 '>
      <p className='text-blue-900 font-bold text-2xl my-4 mx-auto'>Password Generator</p>
      <div className='flex justify-center'>
      <input 
      type="text" 
      className='border-2 h-10 w-80 bg-white' 
      placeholder='password'
      value={password}
      readOnly/>
      <button onClick={copytoclipboard} className='border-2 p-1.5 mx-2 bg-white hover:bg-blue-200'>Copy</button>
      </div>
      <div className='flex p-2'>
        <input 
          type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>setlength(e.target.value)}
        />
        <label>Length:{length}</label>
        <input 
          type="checkbox"
          className='mx-2'
          onClick={()=>setno((no)=>!no)} 
        />
        <label>Number</label>
        <input 
          type="checkbox"
          className='mx-2' 
          onClick={()=>setchar((char)=>!char)}
        />
        <label>Character</label>
      </div>
     </div>
    </>
  )
}

export default App
