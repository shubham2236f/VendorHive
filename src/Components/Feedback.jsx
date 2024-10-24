import React from 'react'
import service from '@/appwrite/config'
import authservice from '@/appwrite/auth';
import { useState,useCallback,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '@/store/authSlice.js'

function Feedback() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    Name: '',
    Email:'',
    Feedback:'',
  });

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
  }, [dispatch, navigate]);

  useEffect(()=>{
    userLogin()
  },[userLogin])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const handlesubmit = async(e)=>{
    e.preventDefault();
    try{
      await service.createFeedback(
        info.Name,
        info.Email,
        info.Feedback
      )
      navigate("/")
    }
     catch(error){
      console.error(error)
     }
     finally{
      console.log("check");
      
     }
  }
  return (
    <div className='w-full h-full'>
        <form className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg"
        onSubmit={handlesubmit}>
    <h2 className="text-2xl font-bold mb-6">Feedback Form</h2>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
      Name:
    </label>
        <input 
        name="Name"
        value={info.Name}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
      Email:
    </label>
        <input 
        name='Email'
        value={info.Email}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="feedback">
      Feedback:
    </label>
        <textarea 
        name='Feedback'
        value={info.Feedback}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter your feedback"></textarea>
    </div>
    <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button>
</form>
    </div>
  )
}

export default Feedback