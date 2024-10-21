import { useNavigate, useParams } from "react-router-dom";
import service from "@/appwrite/config";
import { useEffect,useState } from "react";
import { Query } from "appwrite";
import {Review,Loader,RequestForm} from "@/Components/index.js";

export default function VendorProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [post,setPost] = useState("")
  const fetchPost = async () => {
    try {
      
      const response = await service.getPosts([Query.equal('userId', userId)]);
      if (response && response.documents.length > 0) {
        setPost(response.documents[0]);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    if(userId){
      fetchPost();
    }
  }, [userId]); 

  const handleclick = ()=>{
    navigator.clipboard.writeText(post.Number)
    console.log("copied")
  }

const handleRequest =(userId)=>{
    navigate(`/RequestForm/${userId}`)
}

  const imageUrl = post.profileimgId ? service.getFilePreview(post.profileimgId) : null;
  
  if (!post) {
    return <Loader/> 
  }
    return (
    <div className="w-[100vw] pb-10 pt-28 bg-blue-200">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        
        <div className="flex flex-col items-center p-6">
          
          <div className="relative">
            <img
              className="w-24 h-24 rounded-full"
              src={imageUrl}
              alt="geting"
            />
            
            <div className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Available
            </div>
          </div>
         
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold">{post.Name}</h2>
            <p className="text-gray-500">{post.Occupation}</p>
          </div>
        </div>
  
        
        <div className="p-6 space-y-6">
          
          <div className="flex max-[600px]:flex-col justify-center gap-3 text-gray-700">
            <div className="flex items-center">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>{post.Location}</span>
            </div>
            <div className="flex items-center">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
              <span></span>
            </div>
          </div>
  
          
          <div className="flex justify-center space-x-4">
            <div className="flex items-center text-yellow-500">
              <span>⭐</span>
              <span className="ml-1 font-semibold">4.9</span>
              <span className="text-gray-500 ml-1">(128 reviews)</span>
            </div>
            <div className="flex items-center ">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-indian-rupee"><path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/></svg>
              </span>
              <span className="font-semibold">{post.Visit}</span>
            </div>
          </div>
  
          <div className="space-y-2">
            <h3 className="text-lg font-semibold underline">Contact</h3>
            <p className="text-gray-600 flex font-mono font-semibold gap-2">
            {post.Number}
            <button
            onClick={handleclick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
            </button>
            </p>
          </div>


          <div className="space-y-2">
            <h3 className="text-lg font-semibold underline">About</h3>
            <p className="text-gray-600">
            {post.About}
            </p>
          </div>
  
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold underline">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {post.Skills}
            </div>
          </div>
        </div>
  
        
        <div className="flex justify-between p-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={()=>handleRequest(post.userId)}>
            Book a Session
          </button>
        </div>

      <Review vendorId={post.userId}/>

      </div>
    </div>
    );
  }
  