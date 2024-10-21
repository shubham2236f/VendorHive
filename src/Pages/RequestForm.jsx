import service from '@/appwrite/config'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function RequestForm() {
  const navigate = useNavigate()  
  const {userId} = useParams()
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    location: '',
    description: ''
  })
  useEffect(()=>{
    console.log(userId);
  },[userId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    await service.createRequest(
      formData.name,
      formData.number,
      formData.location,
      formData.description,
      userId,
    )
     navigate("/")
  }

  return (
    <div className="flex justify-center items-center mt-10 min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Request Information</h2>
          <p className="text-gray-700 font-semibold">Please fill out the form below.</p>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input 
            id="name" 
            name="name" 
            type="text"
            placeholder="Enter your name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
            Number
          </label>
          <input 
            id="number" 
            name="number" 
            type="tel" 
            placeholder="Enter your phone number" 
            value={formData.number}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input 
            id="location" 
            name="location" 
            type="text"
            placeholder="Enter your location" 
            value={formData.location}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea 
            id="description" 
            name="description" 
            placeholder="Enter a brief description" 
            value={formData.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}