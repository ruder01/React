import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Head from './components/Head'
import { useState } from 'react'
function App() {
  let btn=['C','1','2','3','+','4','5','6','-','7','8','9','*','/','0','.','=']
  let [val,setval]=useState('')
  const clicked=(text)=>{
    console.log(`${text}`)
    if (text === 'C'){
      setval('')
    }
    else if( text ==="="){
      const result = eval(val)
      setval(result)
    }
    else{
      setval(val+text)
    }

  }
  return (
    <>
    <Head></Head>
    <div className='flex flex-col flex-wrap items-center border-2 h-auto w-80 translate-x-152 my-10'>
      <Input value={val}></Input>
      <div>{btn.map(ele=><Button name={ele} clicked={clicked}></Button>)}</div>
      <div>Factorial banana</div>
    </div>
    </>
  )
}

export default App
