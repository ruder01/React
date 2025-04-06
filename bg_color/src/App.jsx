import { useState } from "react"
function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen flex  justify-center items-end px-0 py-0 "
    style={{backgroundColor : color}}
    >
      <div className="w-200 h-15 my-16 border-2 rounded-3xl flex  justify-center items-centre" style={{backgroundColor: "white"}}>
        <button onClick={() => setColor('red')} className="w-20 border-2-black mx-5 my-2.5 p-1 rounded-2xl text-white" style={{backgroundColor:"Red"}}>
          RED
        </button>
        <button onClick={() => setColor('blue')} className="w-20 border-2-black mx-5 my-2.5 p-1 rounded-2xl text-white" style={{backgroundColor:"BLUE"}}>
          BLUE
        </button>
        <button onClick={() => setColor('yellow')} className="w-20 border-2-black mx-5 my-2.5 p-1 rounded-2xl text-black" style={{backgroundColor:"YELLOW"}}>
          YELLOW
        </button>
        <button onClick={() => setColor('brown')} className="w-20 border-2-black mx-5 my-2.5 p-1 rounded-2xl text-white" style={{backgroundColor:"BROWN"}}>
          BROWN
        </button>
        <button onClick={() => setColor('black')} className="w-20 border-2-black mx-5 my-2.5 p-1 rounded-2xl text-white" style={{backgroundColor:"BLACK"}}>
          BLACK
        </button>
        <button onClick={() => setColor('pink')} className="w-20 border-2-black mx-5 my-2.5 p-1 rounded-2xl text-black" style={{backgroundColor:"PINK"}}>
          PINK
        </button>
      </div>
    </div>
  )
}

export default App
