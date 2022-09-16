import React from 'react';
// import {
//     ArrowPathIcon,
//     CloudArrowUpIcon,
//     CogIcon,
//     LockClosedIcon,
//     ServerIcon,
//     ShieldCheckIcon,
//   } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: '2020 first half',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
     
    },
    {
      name: '2020 second half',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
     
    },
    {
      name: '2021 first half',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
     
    },
    {
      name: '2021 second half',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
     
    },
    {
      name: '2022 first half',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      
    },
    {
      name: '2022 second half',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      
    },
  ]
  
  export const SabbathSchool = () =>{
    return (
      <>
      <div aria-hidden="true" className="relative">
      <img
        src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
        alt=""
        className="h-96 w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white" />
    </div>
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-indigo-600">Sabbath school</h2>
          <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow spiritually
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Today christianity which suppose to be a training school for heaven have become beauty fashion. where people go to display. 
            Study our sabbath school to get more wisdom and know how to eescape this evil practice.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  