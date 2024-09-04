import React from 'react'
import hero from "./Media/hero.png"
import Card from './Card'
import '../App.css' 
import find from "./Media/OIP-removebg-preview.png"
import register from "./Media/register.png"
import search from "./Media/searchim.png"
import list from "./Media/list.png"
import contact from './Media/phone.png'
import vid from './Media/video.mp4'
import Dircard from './Dircard'

function Home() {
  return (
    <>
   <div>  
    <div className=" flex items-center w-screen max-[400px]:flex-col justify-around bg-gradient-to-b from-blue-200 to-white mt-12 pl-2">
        <div>
            <h3 className=" uppercase font-bold text-lg text-[2vw] mt-10 pr-4 h-8 overflow-hidden example">Welcome 
            <span className='text-red-600'> here</span>
            </h3>
            <h1 className="uppercase text-[#3c5b6b] font-extrabold text-[8vw] leading-none
             mt-1">Get<br/>your daily <span className='text-red-600'>workman</span> 
            </h1>
       </div>  
        <div className=" mt-8">
            <img src={hero} className="w-[50vw]" alt="Hero Image"/>
        </div>
    </div>
    <div className='text-center m-5 font-bold text-xl text-slate-700'>________________Uses__________________</div>
    <div className='flex justify-around  max-[400px]:flex-col my-4 w-[95vw]'>
     <Card user="Get your daily workdone" detail="Search and get your daily small work done." src={find} page={"doc1"}/>
     <Card user="Get your daily workdone" detail="Get your self register to find more opportunity." src={register} page={"doc2"}/>
    </div>
    <div className='my-16 rounded-lg text-center border-2 bg-blue-100 shadow-lg'>
      <h1 className='text-gray-600 font-bold text-xl'><u>Our Scope</u></h1>
      <p className='text-gray-600'>
      The "Hire up" web site aims to create a dynamic online platform that connects small vendors and independent
       workers with businesses and individuals seeking their services. This project focuses on empowering vendors and 
       workers by allowing them to create detailed profiles that showcase their skills👌, experience👍, and availability😊. 
       Simultaneously, it provides hiring entities with powerful tools to search, filter, and hire the right 
       professionals efficiently. With integrated features like secure payment processing, a review and rating system, 
       and seamless communication channels, "Vendor Grouping" is designed to simplify the hiring process, foster trust, 
       and build a thriving community where service providers and clients can engage productively. By bringing these
        elements together, the project seeks to enhance visibility, improve business opportunities, and promote
         professional growth for all its users.
      </p>
    </div>
    <div className='text-center font-bold'><h1 className='border-y-2 text-[5vmin] text-gray-700'>How To Get Vendor</h1></div>
    <div className='flex justify-evenly max-[400px]:flex-col '>
    <Dircard step="Step1" src={search} title="Go to search bar" detail="Type about your worker you need to find."/>
    <Dircard step="Step2" src={list} title="Get list of vendors/workers" detail="when you search for something you
     get list of search realated data,select from them."/>
    <Dircard step="Step3" src={contact} title="Contact the selected one" detail="After select one vendor/worker
    contact them through contact detail."/>
    </div>

    <div className='w-screen'>
      <video src={vid} autoPlay loop/>
    </div>

    </div>
    </>
  )
}

export default Home