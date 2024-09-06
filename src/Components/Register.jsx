import React, { useState } from 'react';
import service from '../appwrite/config';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [profile, setProfile] = useState({
    Name: '',
    Number:'',
    Occupation: '',
    Skills: '',
    About: '',
    Experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(
        profile.Name,
          profile.Number,
          profile.Occupation,
          profile.Skills,
          profile.About,
          profile.Experience
    );
    
    try{
        await service.createPost(
          profile.Name,
          profile.Number,
          profile.Occupation,
          profile.Skills,
          profile.About,
          profile.Experience)
    }
    catch(e){
      console.log(e);
    }
    
    
  };
  return (
    <div>
    <div className="container mx-auto p-8">
      <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="Name"
            value={profile.Name}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 ">Number:</label>
          <input
            type="text"
            name="Number"
            value={profile.Number}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border  border-gray-300 rounded py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Occupation:</label>
          <input
            type="text"
            name="Occupation"
            value={profile.Occupation}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Skills (comma-separated):</label>
          <input
            type="text"
            name="Skills"
            value={profile.Skills}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">About Me:</label>
          <textarea
            name="About"
            value={profile.About}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Experience:</label>
          <textarea
            name="Experience"
            value={profile.Experience}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Save Profile
        </button>
      </form>

      
      {profile.Name && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p><strong>Name:</strong> {profile.Name}</p>
            <p><strong>Number:</strong> {profile.Number}</p>
            <p><strong>Occupation:</strong> {profile.Occupation}</p>
            <p><strong>Skills:</strong> {profile.Skills}</p>
            <p><strong>About Me:</strong> {profile.About}</p>
            <p><strong>Experience:</strong> {profile.Experience}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Register