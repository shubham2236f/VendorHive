import React,{ useEffect,useCallback} from 'react'
import hero from "../Components/Media/manwork2.png"
import Card from '../Components/Card'
import '../App.css' 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import find from "../Components/Media/OIP-removebg-preview.png"
import register from "../Components/Media/register.png"
import search from "../Components/Media/searchim.png"
import list from "../Components/Media/list.png"
import contact from '../Components/Media/phone.png'
import vid from '../Components/Media/video.mp4'
import Dircard from '../Components/Dircard'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '@/store/authSlice'
import authservice from '@/appwrite/auth'
import { Pause } from 'lucide-react';

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useCallback(async()=>{
    try{
      const userdata = await authservice.getCurrentUser()
      if(userdata){
        dispatch(login(userdata))
        console.log(userdata);
        
      }
      else{
        navigate("/Login")
      }
    }
    catch(e){
      navigate("/Login")
    }
  },[dispatch,navigate] );

  useEffect(()=>{
    userLogin()
  },[userLogin])

  useGSAP(()=>{
    gsap.from('#hero',{
      
      x:-500,
      duration:2,
    })
    gsap.from('#heroimg',{
      scale:0,
      duration:2,
    })
    gsap.from(".card",{
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".card",
        start:"top 500",
       
      }
    })
  });

  return (
    <>
   <div>  
    <div className=" flex items-center w-screen max-[400px]:flex-col justify-around bg-gradient-to-b from-blue-200 to-white mt-12 pl-2">
        <div className='ml-2'>
            <h3 className=" uppercase font-bold text-lg text-[2vw] mt-10 pr-4 h-8 overflow-hidden example">Welcome 
            <span className='text-red-600'> here</span>
            </h3>
            <h1 id="hero" className="uppercase text-[#3c5b6b] font-extrabold text-[8vw] leading-none
             mt-1">Get<br/>your daily <span className='text-red-600'>workman</span> 
            </h1>
       </div>  
        <div className=" mt-8">
            <img id="heroimg" src={hero} className="w-[90vw]" alt="Hero Image"/>
        </div>
    </div>
    <div className='text-center m-5 font-bold text-xl text-slate-700'>________________Uses__________________</div>
    <div className='flex justify-around  max-[600px]:flex-col my-4 w-[95vw]'>
     <Card user="Get your daily workdone" detail="Search and get your daily small work done." src={find} page={"doc1"}/>
     <Card user="Get your daily workdone" detail="Get your self register to find more opportunity." src={register} page={"doc2"}/>
    </div>

    <div className='text-center font-bold'><h1 className='border-y-2 text-[5vmin] text-gray-700'>How To Get Vendor</h1></div>
    <div className='flex justify-center items-center gap-3 w-[100vw] max-[600px]:flex-col '>
    <Dircard step="Step1" src={search} title="Go to search bar" detail="Type about your worker you need to find according
    to occupation, area."/>
    <Dircard step="Step2" src={list} title="Get list of vendors/workers" detail="when you search for something you
     get list of search realated data,select from them."/>
    <Dircard step="Step3" src={contact} title="Contact the selected one" detail="After select one vendor/worker
    contact them through contact detail."/>
    </div>

    <div className='w-screen'>
      <video src={vid} autoPlay loop/>
    </div>
    
    <div className='text-center font-bold'><h1 className='border-y-2 my-4 text-[5vmin] text-gray-700'>How To Get Work</h1></div>
    <div className='flex justify-center items-center gap-3 w-[100vw] max-[600px]:flex-col '>
    <Dircard step="Step1" src={register} title="Register your self" detail="Go to registration menu and fill your data clearly."/>
    <Dircard step="Step2" src={list} title="List your self for work" detail="After registretion clicik on submit button 
    for listing your self in the world of web."/>
    <Dircard step="Step3" src={contact} title="Wait for users to hire you" detail="after registering your data
    other users will find you according to your work and contact you."/>
    </div>

    </div>
    </>
  )
}

export default Home