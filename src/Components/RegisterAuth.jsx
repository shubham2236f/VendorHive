import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'

function RegisterAuth() {
    const status = useSelector((state)=>state.auth.regStatus)
    const navigate = useNavigate()
    const handleClick = ()=>{
      console.log(status);
      
        if(status==true){
            navigate("/Profile")
        }
    else{
            navigate("/register")
    }
        }
  return (
    <div>
      <Link
      onClick={handleClick}>
        
        <div className="relative w-8 h-8 overflow-hidden ml-1 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>

      </Link>
    </div>
  )
}

export default RegisterAuth