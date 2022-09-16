import React from 'react';

const features = [
    { name: 'Health', description: 'Written by Dr. Asamoah Gabriel.' },
    { name: 'Do it yourself', description: 'Written by Dr. Asamoah Gabriel.' },
    { name: 'Dimensions in Spritual realms', description: 'Written by Dr. Asamoah Gabriel' },
    { name: 'Health Laws', description: 'Written by Dr. Asamoah Gabriel' },
    { name: 'Connect to Heaven', description: 'Written by Dr. Anane Godwin' },
    { name: 'Heal the mind', description: 'Written by Pastor. Agbey Simon.' },
  ]
  
  export const Health = () => {
    return (
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-02-full-width.jpg"
            alt=""
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our church position on COVID-19 vaccination</h2>
            <p className="mt-4 text-gray-500">
            Three Brothers were consecrated as elders during North Eastern Field Conference in New York, USA, Pastor Pablo Hunger, Leader of
            </p>
          </div>
  
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }