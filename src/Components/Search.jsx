import React from 'react'
import { useState } from 'react'
function Search() {
    const [SearchItem,setSearchItem] = useState("")
    const handelSearch = (event)=>{
        setSearchItem(event.target.value)
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        //next handel code
    };
  return (
    <div className='flex justify-center items-center '>
        <div>
            <input type="search" placeholder='find here' onChange={handelSearch} 
            className='w-[40vw]  border rounded-lg focus:outline-none 
             focus:border-blue-300 focus:boder-4 p-1 pl-2 bg-gray-300'/>
        </div>
        <div>
            <button type='submit'
            onClick={handleSubmit}
            className = 'bg-blue-300 mx-2 border font-sans font-bold p-1 hover:bg-white hover:text-blue-600 rounded-xl hover:border-blue-400'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5"
            viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </button>
        </div>
        
    </div>
  )
}

export default Search