     import React from 'react'
     export const Feature = () => {
        return (
            <>
        <div className="relative bg-gray-900">
       <div className="relative h-56 bg-primary sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 hover:opacity-75">
         <img
           className="h-full w-full object-cover hover:opacity-75"
           src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_marriage_lo2fld.jpg"
           alt=""
         />
         <div
           aria-hidden="true"
           className="absolute inset-0 bg-white mix-blend-multiply"
         />
       </div>
       <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
         <div className="md:ml-auto md:w-1/2 md:pl-10">
           <h2 className="text-lg font-serif font-semibold text-gray-300">Soul winning is our priority</h2>
           <p className="mt-2 text-3xl  font-serif font-bold tracking-tight text-white sm:text-4xl">Come now, and let us reason together</p>
           <p className="mt-3 text-lg font-serif text-gray-300 line-clamp-3">
           Said the Lord, though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool. 
          
           </p>
           <span className='text-tertiaryOne'>Isaiah 1:18</span>
           <div className="mt-8">
             <div className="inline-flex rounded-md shadow">
               <a
                 href="contact"
                 className="inline-flex items-center justify-center rounded-md border border-transparent bg-white dark:bg-slate-700 px-5 py-3 text-base font-medium text-gray-800 dark:text-white hover:bg-gray-200"
               >
                   Visit our church service
                 <div className="-mr-1 ml-3 h-5 w-5 text-gray-900" aria-hidden="true" />
               </a>
             </div>
           </div>
         </div>
       </div>
       </div>
            </>
        )
     }