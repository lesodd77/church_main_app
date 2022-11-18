import React from 'react';

const perks = [
  {
    name: 'Pastor Bernard Condua',
    title: 'President of the Mission field',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456542/ghf_images/ghf_p_sialj4.jpg',
    description:
        'Preach the word of God is our priority.',

  },
  {
    name: 'Elder Richard Dalmeida',
    title: 'Vice President of the Mission field',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456541/ghf_images/ghf_vp_n6xscc.jpg',
    description:
          'Preach the word of God is our priority.',

  },
  {
    name: 'Elder Martesin Budu',
    title: 'Secretary of the Mission field',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456541/ghf_images/ghf_secretary_br0nmx.jpg',
    description:
          'Preach the word of God is our priority.',

  },

];

export const OfficersHome = () => (
        <>
       <div className="bg-transparent dark:bg-slate-900">
      <h2 className="sr-only">Our perks</h2>
      <div className="mx-auto dark:bg-slate-900 max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="flex items-center justify-center text-3xl font-bold text-primary dark:text-tertiaryOne">OUR TEAM </h3>
      </div>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="h-28 w-28 rounded-full shadow-md transition-transform hover:scale-125" src={perk.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h1 className="text-md font-serif font-semibold text-primary dark:text-tertiaryOne">{perk.name}</h1>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">{perk.title}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-white">{perk.description}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{perk.href}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    <div className="flex justify-center items-center">
    <a
     href="officers">
    <button
          type="button"
          className="py-1 px-2 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-md outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
         ><span>Learn more</span>

    </button>
    </a>
    </div>
       </div>
        </>
);
