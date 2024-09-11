import React, { useCallback, useState,useEffect } from 'react';
import service from '../appwrite/config';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '@/store/authSlice';
import authservice from '@/appwrite/auth';
function Register() {
  const regStatus = useSelector((state)=>state.auth.regStatus)
  const [userId, setUserId] = useState("");
  const [profileimgId,setprofileimgId] = useState("")
  const [selectedProfile, setSelectedProfile] = useState("");
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    Name: '',
    Number:'',
    Occupation: '',
    Skills: '',
    About: '',
    Location: '',
    Visit:'',
  });
  const handleProfile=(e)=>{
    setSelectedProfile(e.target.files[0]);
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
        const profileimg = selectedProfile ? await service.uploadFile(selectedProfile) : null;
        if(profileimg){
          const post = await service.createPost(
            profile.Name,
            profile.Number,
            profile.Occupation,
            profile.Skills,
            profile.About,
            profile.Location,
              profileimg.$id,
              userId,
              profile.Visit
            )
            dispatch(register({regStatus:true}));
            console.log(regStatus);

            console.log(post);
            
            navigate("/");
        }
        
    }
    catch(e){
      console.log(e);
    }
    
    
  };

  const getUser= useCallback( async()=>{
    try {
        const userData = await authservice.getCurrentUser()
        if(userData){
            setUserId(userData.$id)
        }
    } catch (error) {
        console.log("ERROR: in featch data in register page", error);
    }
    },[userId,handleSubmit])

  useEffect(() => {
    getUser()
    if (regStatus===true) {
      navigate("/")
    }
  }, [getUser])

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
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">About Me:</label>
          <textarea
            name="About"
            value={profile.About}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
            required={true}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <textarea
            name="Location"
            value={profile.Location}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
            required={true}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Visit Charge:</label>
          <input
            type="text"
            name="Visit"
            value={profile.Visit}
            onChange={handleChange}
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
            required={true}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Profile photo:</label>
          <input
          type='file'
            id='featuredDoc'
            name="featuredDoc"
            onChange={handleProfile}
            accept="image/png, image/jpg"
            className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded py-2 px-4"
            required={true}
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
            <p><strong>Visit Charge:</strong> {profile.Visit}</p>
            <p><strong>Skills:</strong> {profile.Skills}</p>
            <p><strong>About Me:</strong> {profile.About}</p>
            <p><strong>Location:</strong> {profile.Location}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}

export default Register