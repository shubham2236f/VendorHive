import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Edit() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/register")
    }
  return (
    
    <button 
    onClick={handleClick}
    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Edit Profile</button>
    
  )
}

