function Items({item}){
    return(
        <>
        {item.map((ele)=>(
            <>
<div className="text-center font-medium m-5 flex justify-center gap-x-25">
    <span>{ele.name}</span>
    <span>{ele.date}</span>
    <button className="border-2 bg-red-500 px-4 py-1">Delete</button>
</div>

            </>
        ))}
        </>
    )
}
export default Items;