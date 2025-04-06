function Input({value}){
    return(       
        <input type="text" 
            className='border-2 w-70 h-10 my-5 text-2xl font-semibold' 
            value={value}
            readOnly
            />
    )
}
export default Input