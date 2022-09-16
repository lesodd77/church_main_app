import React from "react";

export const Search = () => {
 
  return (
   
    <>
    <div className="flex items-center m-2">
          <div className="flex-shrink-0">
      <form action="" className="relative mx-auto w-max"  onClick={() => toggleShowMyPosts()}>
              <input type="search"
                  className="relative z-20 w-12 h-8 px-2 py-3 bg-transparent border rounded-full outline-none cursor-pointer peer focus:w-full focus:cursor-text focus:pl-12 focus:pr-4" />
              <svg xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-8 w-12  border-r border-transparent stroke-gray-300 px-3.5 peer-focus:border-white peer-focus:stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              </form>
     </div>
     </div>
          </>
       
 
  )
}
