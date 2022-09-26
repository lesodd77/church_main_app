import React from 'react'

const perks = [
  {
    name: 'Pastor Bernard Condua',
    title: 'President of the Mission field',
    imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_p_sialj4.jpg',
    description:
      "Preach the word of God is our priority.",
      href: 'bencongh@gmail.com',
  },
  {
      name: 'Elder Richard Dalmeida',
      title: 'Vice President of the Mission field',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_vp_n6xscc.jpg',
      description:
        "Preach the word of God is our priority.",
        href: 'bencongh@gmail.com',
    },
    {
      name: 'Elder Martesin Budu',
      title: 'Secretary of the Mission field',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663938093/ghf_images/hakuna_bu8afl.jpg',
      description:
        "Preach the word of God is our priority.",
        href: 'bumart70@gmail.com',
    },
    {
      name: 'Elder Benjamin Teye',
      title: 'Treasure of The Mission Field',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663458581/ghf_images/PHOTO-2022-09-17-10-31-45_sgrba5.jpg',
      description:
        "Preach the word of God is our priority.",
        href: 'bteye1174@gmail.com',
    },
    {
        name: 'Elder Theophilus Adesu',
        title: 'Missionary Dep. Leader',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663938044/ghf_images/theo_bhvvxo.jpg',
        description:
          "Preach the word of God is our priority.",
          
      },
      {
        name: 'Elder Sampson Abukari',
        title: 'Multimedia Dep. Leader',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663458591/ghf_images/PHOTO-2022-09-17-09-00-33_ovt328.jpg',
        description:
          "Preach the word of God is our priority.",
         
      },
      {
        name: 'Elder Oscar Kroankye',
        title: 'Family Dep. Leader',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
        description:
          "Preach the word of God is our priority.",
         
      },
      {
        name: 'Elder Dr. Buadu',
        title: 'Health Dep. Leader',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1664195547/ghf_images/buadu_ue9abv.jpg',
        description:
          "Preach the word of God is our priority.",
         
      },
      {
        name: 'Elder John Bain',
        title: 'Auditor of the Ghana field',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1664198337/ghf_images/bain_lvz8zr.jpg',
        description:
          "Preach the word of God and accuracy is in reporting is my priority.",
         
      },
      {
        name: 'Elder Adu Gyemfi',
        title: 'Education Dep. Leader',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1664198398/ghf_images/wisdomman_qwvihg.jpg',
        description:
          "Preaching the word of God is our priority.",
         
      },
      {
        name: 'Elder Stephen Asiedu',
        title: 'Music Dep. Leader',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1664198743/ghf_images/buadu-2_mzzoqm.jpg',
        description:
          "Preaching the word of God through music.",
         
      },
    
    
]

export const Officers = () => {
    return (
        <>
        <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_hohoe_cm_uybaxl.jpg"
            alt=""
            className="h-96 w-full mt-16 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
        <div id='home' className="bg-transparent">
      <h2 className="sr-only">Our perks</h2>
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <h1 className="flex items-center justify-center text-3xl font-bold text-primary dark:text-tertiaryOne">OUR TEAM </h1>
         </div>
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl sm:grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {perks.map((perk) => (
            <div key={perk.name} className="sm:flex">
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <img className="h-28 w-28 rounded-full shadow-md transition-transform hover:scale-125" src={perk.imageSrc} alt="" />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <h1 className="text-md font-serif font-semibold text-primary">{perk.name}</h1>
                <h3 className="text-sm ffont-serif  ont-medium text-gray-900">{perk.title}</h3>
                <p className="mt-2 text-sm font-serif  text-gray-500">{perk.description}</p>
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