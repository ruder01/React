function InputBox(){
    return(
        
        <div className='text-center my-10  font-medium'>
        <input className="border-2" type="text" placeholder="To Do Name" />
        <input className="border-2 m-3" type="date" />
        <button className="m-3 border-2 bg-green-400 px-5 py-1" >Add</button>
        </div>
        )
        }
export default InputBox;