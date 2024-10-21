import React, { useCallback, useState, useEffect } from 'react';
import service from '../appwrite/config';
import { Query } from 'appwrite';
import { useNavigate } from 'react-router-dom';
import { Image, File, User, Phone, Briefcase, MapPin, DollarSign } from 'lucide-react'; // Importing Lucide icons
import authservice from '@/appwrite/auth';

function Register() {
  const [userId, setUserId] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [oldRegister, setOldRegister] = useState("");
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    Name: '',
    Number: '',
    Occupation: '',
    Skills: '',
    About: '',
    Location: '',
    Visit: '',
  });

  const handleProfile = (e) => {
    setSelectedProfile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const profileimg = selectedProfile ? await service.uploadFile(selectedProfile) : null;
      if (profileimg) {
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
        );
        console.log(post);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const profileimg = selectedProfile ? await service.uploadFile(selectedProfile) : oldRegister.profile;

      if (profile) {
        const registeruser = await service.updatePost(
          oldRegister.$id,
          profile.Name || oldRegister.Name,
          profile.Number || oldRegister.Number,
          profile.Occupation || oldRegister.Occupation,
          profile.Skills || oldRegister.Skills,
          profile.About || oldRegister.About,
          profile.Location || oldRegister.Location,
          profileimg.$id,
          userId,
          profile.Visit || oldRegister.Visit
        );
        console.log("register SUCCESSFULLY", registeruser);
        navigate("/");
      }
    } catch (error) {
      console.log("ERROR ON ADDING Register", error);
    }
  };

  const getUser = useCallback(async () => {
    try {
      const userData = await authservice.getCurrentUser();
      const data = await service.getPosts([Query.equal('userId', userData.$id)]);
      if (data.documents.length > 0) {
        setUserId(userData.$id);
        const fetchData = data.documents[0];
        setOldRegister(fetchData);
        setRegisterStatus(true);
      }
    } catch (error) {
      console.log("ERROR: in fetching data in register page", error);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className="container mx-auto p-8">
      <form className="bg-white border-2 shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-2 mb-6">
          <User size={28} /> Profile Information
        </h2>

        <div className="mb-4">
          <label className=" text-gray-700 flex items-center gap-2">
            <User size={20} /> Name:
          </label>
          <input
            type="text"
            name="Name"
            value={profile.Name}
            onChange={handleChange}
            className="mt-1 block w-full  border-b-2 outline-none border-black py-1 px-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className=" text-gray-700 flex items-center gap-2">
            <Phone size={20} /> Number:
          </label>
          <input
            type="text"
            name="Number"
            value={profile.Number}
            onChange={handleChange}
            className="mt-1 block w-full border-b-2 outline-none border-black py-1 px-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className=" text-gray-700 flex items-center gap-2">
            <Briefcase size={20} /> Occupation:
          </label>
          <input
            type="text"
            name="Occupation"
            value={profile.Occupation}
            onChange={handleChange}
            className="mt-1 block w-full border-b-2 outline-none border-black py-1 px-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className=" text-gray-700 flex items-center gap-2">
            <File size={20} /> Skills (comma-separated):
          </label>
          <input
            type="text"
            name="Skills"
            value={profile.Skills}
            onChange={handleChange}
            className="mt-1 block w-full  border-b-2 outline-none border-black py-1 px-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">About Me:</label>
          <textarea
            name="About"
            value={profile.About}
            onChange={handleChange}
            className="mt-1 block w-full  border-b-2 outline-none border-black py-1 px-4"
            required={true}
          />
        </div>

        <div className="mb-4">
          <label className=" text-gray-700 flex items-center gap-2">
            <MapPin size={20} /> Location:
          </label>
          <textarea
            name="Location"
            value={profile.Location}
            onChange={handleChange}
            className="mt-1 block w-full  border-b-2 outline-none border-black py-1 px-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className=" text-gray-700 flex items-center gap-2">
            <DollarSign size={20} /> Visit Charge:
          </label>
          <input
            type="text"
            name="Visit"
            value={profile.Visit}
            onChange={handleChange}
            className="mt-1 block w-full  border-b-2 outline-none border-black py-1 px-4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="b text-gray-700 flex items-center gap-2">
            <Image size={20} /> Profile photo:
          </label>
          <input
            type="file"
            id="featuredDoc"
            name="featuredDoc"
            onChange={handleProfile}
            accept="image/png, image/jpg"
            className="mt-1 block w-full px-4"
            required
          />
        </div>

        {registerStatus ? (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg  flex justify-center items-center gap-2"
            onClick={handleUpdate}
          >
            <User size={20} /> Update Profile
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex justify-center items-center gap-2"
          >
            <User size={20} /> Save Profile
          </button>
        )}
      </form>

      {profile.Name && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p>
              <strong>Name:</strong> {profile.Name}
            </p>
            <p>
              <strong>Number:</strong> {profile.Number}
            </p>
            <p>
              <strong>Occupation:</strong> {profile.Occupation}
            </p>
            <p>
              <strong>Visit Charge:</strong> {profile.Visit}
            </p>
            <p>
              <strong>Skills:</strong> {profile.Skills}
            </p>
            <p>
              <strong>About Me:</strong> {profile.About}
            </p>
            <p>
              <strong>Location:</strong> {profile.Location}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
