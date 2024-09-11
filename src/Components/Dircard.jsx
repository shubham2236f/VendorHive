import React from 'react'

function Dircard({step,src,title,detail}) {
  return (
    <>
    {/* < div className='mx-6 my-5 w-[300px] text-center  h-[350px] rounded-lg shadow-2xl 
    flex-col justify-center items-center border-blue-200 border-2
    bg-[url(C:\Users\shubham\Desktop\React\hireup\src\Components\Media\cardbg.jpg)]
    bg-contain'>
        <h3 className='font-semibold w-fit  text-left ml-2 text-gray-600'>{step}</h3>
        <img src={src} className='rounded-full mx-24 w-[100px] h-[100px]'/>
        <p className='font-bold text-center border-y-2 border-slate-500 mt-10'>{title}</p>
        <p className='text-center mt-5'>{detail}</p>
    </div> */}



    

<div className="max-w-sm  h-[280px]  my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <p>{step}</p>
    <img src={src} alt="#" className='rounded-full mx-24 w-[100px] h-[100px]'/>
    <h5 className="mx-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p className="m-3 font-normal text-gray-500 dark:text-gray-400">
      {detail}</p>
</div>

    </> 
  )
}

export default Dircard