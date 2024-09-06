import React, { useState } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import Search from '../Search'
import menu from '../Media/menu.png'
import { Menu, X } from "lucide-react";

function Header() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  const authStatus = useSelector((state)=>state.auth.status)
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 

  {
      name: "Register",
      slug: "/register",
      active: !authStatus,
  },
  {
    name: "Review",
    slug: "/Review",
    active: !authStatus,
  },
  ]
  return (
    <div className=' flex w-screen bg-white py-4 z-50 shadow-md justify-between items-center fixed left-0 top-0'>
        <div className='mx-8'><Search/></div>
        
          <div className='flex justify-between'>
            <ul className='flex max-[400px]:hidden'>
            {navItems.map((items)=>
            items.active ? (
              <li key={items.name} className='mr-5 font-semibold text-[3vmin] '>
                <Link className='hover:border-b-2 border-red-600 hover:bg-slate-100 ' activeStyle={{ color: 'red' }} to={items.slug}>
                {items.name}
                </Link>
              </li>
              
            ) : null
            )}
            </ul>
            <Link to="/Profile" className='mr-4'> 
                <div className="relative w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
            </Link>
            <button className='hidden max-[400px]:block w-fit border-none bg-white'
            >
            <img src={menu} className='h-8 w-9' />
            </button>
            
          </div>  
    </div>
  )
}

export default Header