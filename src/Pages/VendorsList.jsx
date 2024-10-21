import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import service from '@/appwrite/config'
import { Query } from 'appwrite';
import { Star, MessageCircle, Briefcase } from 'lucide-react'



export default function VendorsList({className}) {
  const [Posts,setPosts] = useState([])
  const searchKey = useSelector((state)=>state.auth.searchKey);
  const navigate = useNavigate()

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
    return <div className='mt-32 mb-10 font-semibold text-center'>No data found</div>
  }
  return (
    <>
        {/* <div className={`${className} max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8`}>
          <ul className="divide-y divide-gray-200">
            {Posts.map((Post) => (
              <li key={Post.userId} className="py-6 flex mb-2 bg-gradient-to-l from-blue-100 to-blue-50 rounded-lg">
                <button onClick={()=>handleButtonClick(Post)}
                  className='w-full'>
                <div className="flex-shrink-0 w-[20vmin] h-[20vmin] border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src={service.getFilePreview(Post.profileimgId)}
                    alt={Post.Name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className=" text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">{Post.Name}</a>
                        <p className="mt-1 text-sm text-gray-500">{Post.Location}</p>
                      </h3>
                      <button 
                      onClick={()=>handleButtonClick(Post)}
                      className='p-1 relative top-0 left-0 bg-blue-600 text-white mr-4 rounded-sm hover:bg-blue-400'>Get Now
                      </button>
                      
                    </div>
                  </div>
                </div>
              </button>  
              </li>
            ))}
          </ul>
        </div>
    */}


<section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
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
                {/* <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-semibold">{vendor.rating.toFixed(1)}</span>
                    <span className="text-gray-500 ml-1">({vendor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Briefcase className="h-5 w-5 mr-1" />
                    <span>{vendor.projectsCompleted} projects</span>
                  </div>
                </div> */}
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