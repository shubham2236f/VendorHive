import React from 'react'

function Dircard({step,src,title,detail}) {
  return (
    < div className='mx-6 my-5 w-[300px] text-center bg-white h-[350px] rounded-lg shadow-2xl flex-col bg-gradient-to-t from-blue-200 to-white'>
        <h3 className='font-semibold w-fit  text-left ml-2 text-gray-600'>{step}</h3>
        <img src={src} className='rounded-full mx-24 w-[100px] h-[100px]'/>
        <p className='font-bold text-center border-y-2 border-slate-500 mt-10'>{title}</p>
        <p className='text-center mt-5'>{detail}</p>
    </div>
  )
}

export default Dircard