import { useState,useEffect,useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import authservice from '@/appwrite/auth';
import service from '@/appwrite/config'
import { Query } from 'appwrite';
import {MessageCircle } from 'lucide-react'
import { login } from '@/store/authSlice.js'

export default function VendorsList({className}) {
  const [Posts,setPosts] = useState([])
  const [auth,setAuth] = useState(false)
  const searchKey = useSelector((state)=>state.auth.searchKey);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const userLogin = useCallback(async()=>{
    try{
      const userdata = await authservice.getCurrentUser()
      if(userdata){
        dispatch(login(userdata))
        setAuth(true)
      }
    }
    catch(e){
      console.error(e)
    }
  },[dispatch,navigate] );

  useEffect(()=>{
    userLogin()
  },[userLogin])

  const fetchPosts = async () => {
    try {
      let queries = [];

      if (searchKey) {
        queries.push(Query.search('Occupation', searchKey));
      }
      await service.getPosts(queries).then((response)=>{
        if(response){
          setPosts(response.documents); 
          console.log(response.documents);
          
        }
        else {
          setPosts([]);
        }
      })
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(()=>{
    fetchPosts();
  },[searchKey])

  const handleButtonClick = (post) => {
    navigate(`/vendorProfile/${post.userId}`);
  };

  const handlecopy = (post) =>{
    navigator.clipboard.writeText(post.Number)
    alert("you copyied Number")
  }

  if(Posts.length === 0){

    return (
      <>
      {auth ? (
        <div className='w-full h-[80vh] flex justify-center items-center font-bold text-xl'>
          <h1 className='border-2 p-2 rounded-lg border-slate-700 shadow-md'>Data Not Found</h1></div>
      ) : (
        <div className='w-full h-[80vh] flex justify-center items-center'>
        <button
          type="button"
          className=" mt-24 rounded-md px-2 py-1 font-semibold text-[3vmin] focus-visible:outline 
          bg-blue-500 text-white
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black
           hover:bg-blue-400"
          onClick={() => navigate("/Login")}
        >
          Login To Get Service
        </button>
        </div>
      )}
      </>  
      )
  }
  return (
    <>
<section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-[300px]:p-0">
        <h2 className="text-3xl font-bold text-center mb-8 mt-4">Featured Vendors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Posts.map((vendor) => (
            <div key={vendor.userId} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-[17vmin] h-[17vmin] rounded-full overflow-hidden">
                  <img
                    src={service.getFilePreview(vendor.profileimgId)}
                    alt={vendor.Name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                  <div className='ml-2'>
                    <h3 className="text-xl font-semibold">{vendor.Name}</h3>
                    <p className="text-purple-600">{vendor.Occupation}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{vendor.About}</p>
                <div className="flex justify-between items-center">
                  <button
                  onClick={()=>handleButtonClick(vendor)}
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                    >
                    View Profile
                  </button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center"
                  onClick={()=>handlecopy(vendor)}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}