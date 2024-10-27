import React from 'react'
import google from './Media/google.png'
import backimg from './Media/bg.avif'
import authservice from '../appwrite/auth'
import { useNavigate } from 'react-router-dom'
function Login() {
    const loginWithGoogleAuth = async () => {
        await authservice.loginWithGoogle();
        useNavigate("/")
    };
  return (
   <main>
  
    <div className='h-[100vh] w-[100vw]
    bg-cover bg-no-repeat flex justify-center items-center'
    style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: 'fit',
        
      }}>
          <div className='text-center absolute backdrop-blur-md backdrop-contrast-50 py-1 text-white 
          top-0 font-semibold text-4xl w-[100vw]'>
        <h1 >vendors Hive</h1>
    </div>
        <div className='backdrop-blur-md flex max-[400px]:h-fit border-white border-2 
        rounded-lg h-[50vh]'>
        
            <div className='flex-col  flex-wrap items-center justify-center'>
            <div className='text-white font-semibold text-center m-5'>
                    <h1 className='text-2xl'>Signup to get started</h1>
                </div>
                <div className='mt-[20vh] w-[100%] text-center max-[400px]:mb-4'>
                    <button className=' text-white font-semibold flex items-center rounded-lg bg-blue-600 px-1
                    animate-pulse ml-10'
                    onClick={loginWithGoogleAuth}
                    >
                    <img src={google} alt="#"  className='h[40px] w-[40px]'/> 
                    Signup with google
                    </button>
                </div>
            </div>
                
        </div>
    </div>
    </main>
  )
}

export default Login