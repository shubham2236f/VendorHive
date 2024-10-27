import React from 'react'
import cycle from "./Media/cyclist.gif"
import car from "./Media/volks.gif"
import backimg from "./Media/footer_bg.png"
import { Link } from 'react-router-dom'
import { Briefcase } from 'lucide-react';

const message =
    "Hello, I came from your webiste.";
const whatsappUrl =
    "https://wa.me/" + "+9163862063" + "?text=" + encodeURIComponent(message);

function Footer() {
  return (
        <footer className="bg-blue-100 ">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 
           bg-no-repeat"
          style={{
              backgroundImage: `url(${backimg})`,
              backgroundSize: 'fit',
              
            }}>
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="C:\Users\shubham\Desktop\React\hireup\src\Components\Home.jsx" className="flex items-center">
                  <span className="self-center text-3xl flex gap-1 font-bold whitespace-nowrap">
                    <Briefcase className='h-11 w-11'/>
                    Vendor Hive
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
               
                <div>
                  <u><h2 className="mb-6 text-sm font-bold text-black uppercase ">
                    Follow us
                  </h2></u>
                  <ul className="text-black font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/shubham2236f"
                        className="hover:underline"
                      >
                        Github
                      </a>
                    </li>
                    <li className='mb-4'>
                      <a
                        href="#"
                        className="hover:underline"
                      >
                        Instagram
                      </a>
                    </li>
                    <li className='mb-4'>
                      <Link to="/feedback"
                      className="hover:underline">
                       Feedback
                      </Link>
                    </li>
                    <li>
                      <Link to={whatsappUrl}
                      className="hover:underline">
                       whatsapp Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <u><h2 className="mb-6 text-sm font-bold text-black uppercase ">
                    Legal
                  </h2></u>
                  <ul className="text-gray-700 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
            <div>
              <img src={cycle}  className='w-10 relative top-[10vh] max-[400px]:z-30 movecycle' />
              <img src={car}  className='w-25 h-20 relative z-10 movecar'/>
            </div>

            <div className="sm:flex sm:items-center sm:justify-around mt-8">
              <span className="text-sm text-gray-900 sm:text-center">
                © 2023{" "}
                <a href="#" className="hover:underline">
                  VendorHive™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500  ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 18 4.374l.01-.524A8.18 8.18 0 0 0 20 1.893Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-500 ms-5"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .2A9.8 9.8 0 1 0 19.8 10 9.8 9.8 0 0 0 10 .2Zm0 18.175a8.375 8.375 0 0 1-6.235-2.71A8.496 8.496 0 0 1 1.7 10 8.448 8.448 0 0 1 3.75 4.335 8.346 8.346 0 0 1 10 1.775a8.375 8.375 0 0 1 6.235 2.71A8.496 8.496 0 0 1 18.3 10a8.448 8.448 0 0 1-2.05 5.665 8.346 8.346 0 0 1-6.25 2.71Zm4.563-8.773a6.992 6.992 0 0 0 .112-1.2 7.178 7.178 0 0 0-.118-1.222h-2.712v2.421H7.267V7.777H4.6A8.59 8.59 0 0 0 4.375 10a8.59 8.59 0 0 0 .225 2.223h2.667V9.802h2.63v2.421ZM10 7.802h2.745V5.381H10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      )
}

export default Footer