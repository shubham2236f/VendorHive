import React,{useEffect}from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


function Dircard({title,step1,step2,step3,detail1,detail2,detail3,className}) {

  useGSAP(() => {
    // Ensure GSAP animation is triggered on the right class
    gsap.from(`.${className} h2, .${className} p`, {
      opacity:0,
      x:-180,
      y:50,
      duration: .8,
      stagger: 0.2, // This will make the elements appear one after the other
      scrollTrigger:{
        trigger: `.${className}`,
        start: "top 83%",
      },
    });
  }, [className]);

  return (
    <>
      <div className={`${className} w-[100vw] py-4 h-fit flex justify-center items-center my-3`}>
      <div className="w-full h-full py-4 bg-blue-100 text-gray-800 shadow-xl ring-1 ring-gray-900/5 transition-all 
         duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg mx-3">

          <div className='flex items-center justify-center font-bold w-full'>
            <h1 className='text-[5vmin] bg-blue-300 text-white my-5 p-2 rounded-lg max-[400px]:text-2xl '>{title}</h1>
          </div>

          <div className='w-full h-full
          bg-[url(C:\Users\shubham\Desktop\React\hireup\src\Components\Media\arrow.PNG)]  bg-no-repeat
         bg-[length:70vw_120px]  flex max-[400px]:flex-col max-[400px]:justify-between gap-7 justify-evenly items-center 
         '>

          <div className='w-[250px] mx-4 border-r-2 bg-blue-100'>
            <h2 className='font-semibold text-xl border-b-2'>{step1}</h2>
            <p className='my-3'>{detail1}</p>
          </div>
          <div className='w-[250px] mx-4 border-r-2 bg-blue-100'>
          <h2 className='font-semibold text-xl border-b-2'>{step2}</h2>
          <p className='my-3'>{detail2}</p>
          </div>
          <div className='w-[250px] mx-4 border-r-2 bg-blue-100'>
          <h2 className='font-semibold text-xl border-b-2'>{step3}</h2>
          <p className='my-3'>{detail3}</p>
          </div>


          </div>
      </div>
      </div>
    </>

   
  )
}

export default Dircard