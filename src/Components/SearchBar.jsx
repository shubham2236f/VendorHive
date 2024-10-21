// import React from 'react'
// import { useState } from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import {search} from '@/store/authSlice'

// function SearchBar() {
//     const [SearchItem,setSearchItem] = useState("")
//     const [isActive,setisActive] = useState(false)
//     const searchkey = useSelector((state)=>state.auth.searchKey)
//     const dispatch =  useDispatch()
//     const navigate = useNavigate()

//     const handelSearch = (event)=>{
//         setSearchItem(event.target.value)
//     }
//     const handleSubmit = (event)=>{
//         event.preventDefault();
//         dispatch(search({ searchKey: SearchItem }));
//         navigate("/vendors")
//     };
//   return (
//     <div className={'flex justify-center items-center border-2 rounded-2xl'}>
//         <div>
//             <input type="search" placeholder='search by work' onChange={handelSearch} 
//             onFocus={()=>setisActive(true)}
//             className='w-[35vw] text-gray-500  ml-4 outline-none'/>
//         </div>
        
//         <div>
//             <button type='submit'
//             onClick={handleSubmit}
//             className='mr-3 mt-1'
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#787373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
//             </button>
            
//         </div>
        
//     </div>
//   )
// }

// export default SearchBar


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { search } from '@/store/authSlice';

function SearchBar() {
  const [searchItem, setSearchItem] = useState("");
  const [isActive, setIsActive] = useState(false); // For handling active state
  const searchKey = useSelector((state) => state.auth.searchKey);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(search({ searchKey: searchItem }));
    navigate("/vendors");
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`flex justify-center items-center w-[39vw] max-[300px]:w-[45vw] max-[300px]:h-fit border-2 rounded-2xl transition-all duration-300 ${
        isActive ? 'border-blue-400 shadow-xl' : 'border-gray-400'
      }`}
    >
      <div className="flex-1">
        <input
          type="search"
          placeholder="search..."
          onChange={handleSearch}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`text-gray-500 rounded-md mr-1 w-[28vw] outline-none transition-all ml-5 duration-300`}
        />
      </div>

      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mr-4 mt-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#787373"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
