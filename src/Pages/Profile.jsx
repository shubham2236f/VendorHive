import React, { useEffect,useState } from 'react'
import service from '@/appwrite/config'
import authservice from '@/appwrite/auth'
import { Query } from 'appwrite'
import  {Edit,Loader}  from '../Components/index.js'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();
    const [userdata , setuserdata]  = useState("");
    const getdata= async()=>{
        try{
        const response = await authservice.getCurrentUser()
        const data = await service.getPosts([Query.equal('userId', response.$id)])
        if(data){
            setuserdata(data.documents[0])
        }
    }
    catch(error){
        console.log(error);
        
    }
    }
    useEffect(()=>{
        getdata()
    },[])

    const handleclick = ()=>{
        navigate("/Requests")
    }
    const imageUrl = userdata.profileimgId ? service.getFilePreview(userdata.profileimgId) : null;
    if(!userdata){
        return <Loader/>
    }
  return (
<>
<div className='h-10'></div>
<div className="bg-blue-50">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src={imageUrl} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">{userdata?.Name}</h1>
                        <p className="text-gray-700">{userdata.Occupation}</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        <Edit/>
                            <p>{userdata.Number}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700">
                        {userdata.About}
                    </p>
                    <h2 className="text-xl font-bold my-4">Occupation</h2>
                    <p className="text-gray-700">
                        {userdata.Occupation}
                    </p>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className=" text-xl uppercase font-bold tracking-wider mb-2">Skills</span>
                        <ul>
                            <li className="mb-2 text-gray-700">
                                {userdata.Skills}
                            </li>
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold mt-6 mb-4">Location</h2>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 ">{userdata.Location}</span>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mt-6 mb-4">Visit charge</h2>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 ">{userdata.Visit}</span>   
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <button
                            className='bg-blue-500 text-white p-2 font-semibold hover:bg-blue-400 rounded-md'
                            onClick={handleclick}>
                                Request</button>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Profile