/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { RoutePaths } from '/ui/components/general/RoutePaths';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
  <>
    <div
      className="mt-16 bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"
      data-aos="fade-up"
    >
      <div className="max-w-max mx-auto">
        <main className="mx-5 -my-2 flex flex-wrap justify-center">
          <p className="text-4xl font-extrabold text-cyan-600 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extra bold font-bold text-center tracking-tight sm:text-5xl dark:text-slate-300">
                Page not found
              </h1>
              <p className="mt-1 text-sm dark:text-slate-300">
                Please check the URL in the address bar and try again.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <button
                onClick={() => navigate(RoutePaths.HOME)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Go back home
              </button>
              <button
                onClick={() => navigate(RoutePaths.CONTACTFORM)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="relative mt-10 [transform-style:preserve-3d] ml-[400px]">
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-8s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_hohoe_cm_uybaxl.jpg"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_atadeka_co0jsw.jpg"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-6s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://picsum.photos/400/300?0"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://picsum.photos/400/300?0"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="relative w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-4s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_1_mkykpb.jpg"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide [animation-delay:-2s]">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://picsum.photos/400/300?2"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://picsum.photos/400/300?2"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
            <div className="absolute top-0 left-0 w-[400px] overflow-hidden rounded-md animate-slide">
              <figure className="relative overflow-hidden rounded-md">
                <img
                  src="https://picsum.photos/400/300?3"
                  height="300"
                  width="400"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-slate-800/50 bg-gradient-to-t p-2 text-white"></figcaption>
              </figure>
              <img
                src="https://picsum.photos/400/300?3"
                height="300"
                width="400"
                className="-scale-y-100 h-10 object-cover object-bottom opacity-50 [mask-image:linear-gradient(to_top,#000,#0000)] rounded-b-md"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  </>
  );
};
