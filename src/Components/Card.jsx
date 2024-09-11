import React from "react";
import { Link } from "react-router-dom";

function Card({ src, detail,page }) {
  return (
    <>
      <div className="card group relative cursor-pointer overflow-hidden
         bg-[#FFFFFF] px-6 pt-10 pb-8 shadow-xl ring-1 mx-9 ring-gray-900/5 transition-all 
         duration-300 hover:-translate-y-1 hover:shadow-2xl   sm:w-2/4
         rounded-lg sm:mx-7 my-3">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full
            bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center text-white rounded-full
                bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                    <img  className="bg-transparent" src={src} alt="#" />
                </span>
                <div className="space-y-6 pt-5 font-bold text-base leading-7 text-gray-600 transition-all duration-300
                group-hover:text-white/90">
                    <p>{detail}</p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                    <p>
                    <Link
                        to={`/${page}`}
                        className="text-sky-500 transition-all duration-300 group-hover:text-white animate-pulse"
                    >
                        Read the docs &rarr;
                    </Link>
                    </p>
                </div>
            </div>
      </div>
    </>
  );
}

export default Card;
