import React, { useEffect, useState } from 'react'


function Github() {
    const [data,setData]= useState([3])
    useEffect(()=>{
        fetch('https://api.github.com/users/ruder01')
        .then(Response => Response.json())
        .then(data=>{
            setData(data);
        })
    })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github Followers: {data.followers}</div>
  )
}

export default Github