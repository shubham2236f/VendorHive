import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { Query } from 'appwrite'
import service from '@/appwrite/config'
import authservice from '@/appwrite/auth'

function RegisterAuth() {
    const status = useSelector((state)=>state.auth.regStatus)
    const navigate = useNavigate()
    const [userId , setuserId]  = useState("")
    const handleClick = async()=>{
      try {
       const response =  await authservice.getCurrentUser()
       const currentUserId = response.$id;

        const auth = await service.getPosts([Query.search('userId', currentUserId)])
        
      if(auth){
              console.log(auth);
              
              navigate("/Profile")
          }
      else{
              navigate("/register")
      }
      } catch (error) {
        console.error("Error fetching user or auth:", error);
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