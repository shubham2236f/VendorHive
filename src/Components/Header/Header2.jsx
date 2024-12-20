
import { Menu, X } from "lucide-react";
import React, { useEffect, useState,useCallback } from 'react'
import {Link,useNavigate} from "react-router-dom"
import Search from '../SearchBar'
import { login } from '@/store/authSlice.js'
import authservice from "@/appwrite/auth";
import RegisterAuth from "../RegisterAuth";
import { useDispatch } from 'react-redux'

function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [auth,setAuth] = useState(false)

  const userAuth = useCallback(async()=>{
    try{
      const userdata = await authservice.getCurrentUser();
      if(userdata){
        dispatch(login(userdata))
        console.log(userdata);  
        setAuth(true)
      }
    }
    catch(e){
      console.error(e)
    }
  },[dispatch] );

  useEffect(()=>{
    userAuth();
  })

   const handleLogout = async()=>{
    await authservice.logout()
    navigate("/Login")
   }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      
    },
  {
    name: "Vendors",
    slug: "/Vendors",
   
  },
  ]
  return (
    <div className=' flex w-screen bg-[#FFFFFF] py-4 px-4 z-50 shadow-md justify-between items-center fixed left-0 top-0'>
        <div className=''><Search/></div>
        
          <div className='flex justify-between'>
            <ul className='flex max-[500px]:hidden justify-center items-center'>
            {navItems.map((items)=>
            items ? (
              <li key={items.name} className='mr-5 font-semibold text-[3vmin] '>
                <Link className='hover:border-b-2 border-blue-400 p-1 hover:bg-slate-100 ' to={items.slug}>
                {items.name}
                </Link>
              </li>
              
            ) : null
            )}
             <li className="mr-3">
            {auth ? (
              <button
                type="button"
                className=" w-full rounded-md bg-blue-400 px-3 py-2 text-sm font-semibold text-white 
                shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-black hover:bg-blue-500 hover:text-white "
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="w-full rounded-md px-2 py-1 font-semibold text-[3vmin] focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
                 hover:bg-blue-400 hover:text-white"
                onClick={() => navigate("/Login")}
              >
                Login
              </button>
            )}
          </li>
                
            </ul>
            <RegisterAuth/>
            <div className="min-[500px]:hidden ml-2 mt-2">
                <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
            </div>
            
            {isMenuOpen && (
                <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                        <div className="inline-flex items-center space-x-2">
                        <Link to={"/"} onClick={toggleMenu}>
                            <h1 className="font-extrabold text-lg text-black hover:text-[#bdafff]">
                            VENDOR HIVE
                            </h1>
                        </Link>
                        </div>
                        <div className="-mr-2">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-y-4">
                        {navItems.map((item) => (
                            <Link
                            key={item.name}
                            to={item.slug}
                            onClick={toggleMenu}
                            className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                            >
                            <span className="ml-3 text-base font-medium border-blue-400 hover:border-b-2 text-gray-900">
                                {item.name}
                            </span>
                            </Link>
                        ))}
                        </nav>
                    </div>

                    <li>
                    {auth ? (
                      <button
                        type="button"
                        className="w-full rounded-md px-2 py-1 font-semibold bg-blue-400 text-[5vmin] 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-black hover:bg-blue-300 text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="w-full rounded-md px-2 py-1 font-semibold bg-blue-400 text-[5vmin] 
                        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-black hover:bg-blue-300 text-white"
                        onClick={() => navigate("/Login")}
                      >
                        Login
                      </button>
                    )}
                  </li>
                    </div>
                </div>
                </div>
            )}
          </div>  
    </div>
  )
}

export default Header2