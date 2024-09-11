import React, { useEffect } from 'react'

function Profile() {
    useEffect(()=>{
        
    })
  return (
<>
<div className='h-10'></div>
<div className="bg-blue-50">
    <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                        </img>
                        <h1 className="text-xl font-bold">xxx</h1>
                        <p className="text-gray-700">Software Developer</p>
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                            <p>465567687988</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                        vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                        suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                        et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                        luctus risus rhoncus id.
                    </p>
                    <h2 className="text-xl font-bold my-4">Occupation</h2>
                    <p className="text-gray-700">
                        milkman
                    </p>
                    <hr className="my-6 border-t border-gray-300"/>
                    <div className="flex flex-col">
                        <span className=" text-xl uppercase font-bold tracking-wider mb-2">Skills</span>
                        <ul>
                            <li className="mb-2 text-gray-700">JavaScript</li>
                        </ul>
                    </div>
                    <h2 className="text-xl font-bold mt-6 mb-4">Location</h2>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 ">xyz</span>
                            <p>
                                <span className="text-gray-700 mr-2">at ABC Company</span>
                                <span className="text-gray-700">2024 - 2025</span>
                            </p>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold mt-6 mb-4">Visit charge</h2>
                    <div className="mb-6">
                        <div className="flex justify-between flex-wrap gap-2 w-full">
                            <span className="text-gray-700 ">450</span>
                            
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