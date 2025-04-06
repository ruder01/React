import { useState } from 'react'
import './App.css'
import Head from './components/Header'
import InputBox from './components/input'
import Items from './components/Item'

function App() {

const item=[{
  name:'gym',
  date:'03-04-2025'
},
{
  name:'run',
  date:'04-04-2025'
}
]

const [toitem,settoitem]=useState(item);

  return (
    <>
    <Head></Head>
    <InputBox></InputBox>
    <Items item={item}></Items>
    </>
  )
}

export default App
