import React from 'react'

export const Hero = () => {
    return(
        <>

    <div className="mt-16 dark:bg-slate-900 grid grid-cols-12 items-stretch gap-8">
      <div className="col-span-12 md:col-span-16 lg:col-span-5 xl:col-span-7">
       
      </div>
      <div className='col-span-12 lg:col-span-30 xl:col-span-5'>
        <div className="mt-4 h-full w-auto overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-blue-500 to-primary p-4">
          <div className="h-full  overflow-hidden rounded-2xl shadow-lg">
   
            <video 
            autoPlay muted loop 
            className="h-full w-auto object-cover">
              <source  src="./ghf_video/Banner-en.mp4" type="video/mp4" />
            </video>
     
          </div>
        </div>
      </div>
    </div>
    </>
  )
}