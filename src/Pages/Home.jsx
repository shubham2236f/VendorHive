import React,{ useEffect,useCallback} from 'react'
import hero from "../Components/Media/manwork2.png"
import {Card,Swipe,Whyuse,FeedbackReview} from '../Components/index.js'
import '../App.css' 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import find from "../Components/Media/OIP-removebg-preview.png"
import register from "../Components/Media/register.png"
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '@/store/authSlice'
import authservice from '@/appwrite/auth'
import VendorsList from './VendorsList';

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const userLogin = useCallback(async()=>{
  //   try{
  //     const userdata = await authservice.getCurrentUser()
  //     if(userdata){
  //       dispatch(login(userdata))
  //       console.log(userdata);
        
  //     }
  //     else{
  //       navigate("/Login")
  //     }
  //   }
  //   catch(e){
  //     navigate("/Login")
  //   }
  // },[dispatch,navigate] );

  // useEffect(()=>{
  //   userLogin()
  // },[userLogin])

  useGSAP(()=>{
    gsap.from('#hero',{
      
      x:-500,
      duration:2,
    })
    gsap.from('#heroimg',{
      scale:0,
      duration:2,
    })
    gsap.from(".card div",{
      y:200,
      opacity:0,
      duration:.5,
      scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 430",
      }
    })
  });

  return (
    <>
   <div id='full'>  
    <div className=" flex items-center max-[400px]:flex-col justify-around bg-gradient-to-b from-blue-200 to-white mt-12 pl-2">
        <div className='ml-2'>
            <h3 className=" uppercase font-bold text-lg text-[2vw] mt-10 pr-4 h-8 overflow-hidden example">Welcome
              here
            </h3>
            <h1 id="hero" className="uppercase text-[#3c5b6b] font-extrabold text-[8vw] leading-none
             mt-1">Get<br/>your daily <span className='text-red-600'><Swipe/></span> 
            </h1>
       </div>  
        <div className=" mt-8">
            <img id="heroimg" src={hero} className="w-[90vw]" alt="Hero Image"/>
        </div>
    </div>

    <div className='flex justify-around  max-[600px]:flex-col my-4 w-[95vw]'>
     <Card user="Get your daily workdone" detail="Search and get your daily small work done." src={find} page={"doc1"}/>
     <Card user="Get your daily workdone" detail="Get your self register to find more opportunity." src={register} page={"doc2"}/>
    </div>
      <VendorsList className="h-[50vh] overflow-scroll border-2 border-gray-300"/>
      <Whyuse/>
      <FeedbackReview/>

    </div>
    </>
  )
}

export default Home