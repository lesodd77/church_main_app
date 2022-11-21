import React from 'react';

export const Hero = () => (
        <>

    <div className="dark:bg-slate-900 grid grid-cols-12 items-stretch">
      <div className="col-span-12 md:col-span-16 lg:col-span-5 xl:col-span-7" />
      <div className="col-span-12">
        <div className="h-full w-auto overflow-hidden bg-primary shadow-lg shadow-primary">
          <div className="h-full  overflow-hidden shadow-2xl shadow-primary">
    <div className="aspect-w-16 aspect-h-9 lg:aspect-none md:aspect-none">
            <video
            autoPlay
muted
loop
            className="h-full w-full object-cover object-center">
              <source
src="./ghf_video/Banner-en.mp4"
              type="video/mp4" />
            </video>
    </div>
          </div>
        </div>
      </div>
    </div>
        </>
);
