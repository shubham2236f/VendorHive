import authservice from '@/appwrite/auth'
import service from '@/appwrite/config'
import { Loader } from '@/Components/index.js'
import { Query } from 'appwrite'
import React, { useState,useEffect, useCallback } from 'react'

const initialRequests = [
  {
    id: '1',
    name: 'John Doe',
    number: '+1 (555) 123-4567',
    location: 'New York, NY',
    description: 'Web development project for e-commerce platform.'
  },
  {
    id: '2',
    name: 'Jane Smith',
    number: '+1 (555) 987-6543',
    location: 'San Francisco, CA',
    description: 'Mobile app development for fitness tracking.'
  },
  {
    id: '3',
    name: 'Bob Johnson',
    number: '+1 (555) 246-8135',
    location: 'Chicago, IL',
    description: 'Data analysis project for market research.'
  },
  {
    id: '4',
    name: 'Alice Brown',
    number: '+1 (555) 369-2580',
    location: 'Miami, FL',
    description: 'Graphic design work for brand identity.'
  }
]

export default function RequestShowcase() {
  const [requests, setRequests] = useState([])
  const [selectedRequest, setSelectedRequest] = useState(null)

  const handleViewDetails = (request) => {
    setSelectedRequest(request)
  }

  const handleCloseDetails = () => {
    setSelectedRequest(null)
  }
  const getRequest = useCallback(async ()=>{
    try {
      const response = await authservice.getCurrentUser();
      if(response){
        const data = await service.getRequest([Query.equal('userId',response.$id)]);
        setRequests(data.documents)
      }
    } catch (error) {
      console.error(error);
      
    } 
  },[])

  useEffect(()=>{
    getRequest();
},[getRequest])

  if(requests.length === 0){
    return (
      <>
    <h1 className="text-xl w-full h-full text-center font-bold text-gray-800 mb-6">"No requests for now."</h1>
    <Loader/>
    </>
    )
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Request Showcase</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((request) => (
          <div key={request.userId} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{request.Name}</h2>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Number:</span> {request.Number}</p>
              <p className="text-gray-600 mb-2"><span className="font-semibold">Location:</span> {request.Location}</p>            </div>
            <div className="px-6 py-4 bg-gray-100">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => handleViewDetails(request)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedRequest.Name}</h2>
            <p className="mb-2"><span className="font-semibold">Number:</span> {selectedRequest.Number}</p>
            <p className="mb-2"><span className="font-semibold">Location:</span> {selectedRequest.Location}</p>
            <p className="mb-4"><span className="font-semibold">Description:</span> {selectedRequest.Description}</p>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}