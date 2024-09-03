import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import Search from '../Search'
import menu from '../Media/menu.png'

function Header() {
  const handleMenu = ()=>{
    
  }
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
    name: "Profile",
    slug: "/Profile",
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
            <button className='hidden max-[400px]:block w-fit border-none bg-white'
            onClick={handleMenu}>
            <img src={menu} className='h-8 w-9' />
            </button>
            
          </div>  
    </div>
  )
}

export default Header