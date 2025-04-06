function Button({name,clicked}){
    return(
        <>
        <button className='bg-gray-400 hover:bg-gray-500 text-center text-2xl font-semibold border-2 w-12 h-12 m-3.5'
                onClick={()=>clicked(name)}
        > 
        {name}
        </button>
        </>
    )
}
export default Button