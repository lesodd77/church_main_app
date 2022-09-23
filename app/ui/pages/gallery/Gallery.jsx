import React from 'react'

  const products = [
    {
      id: 1,
      name: 'Teshie branch',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
      imageAlt: 'Come and worship with us this and evry sabbath.',
      branch: 'Joint Service at at Teshie',
    },
    {
      id: 2,
      name: 'Kakasunaka branch',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_kakasunanka_redvvd.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      branch: 'Joint Service at Kakasunaka',
    },
    {
      id: 3,
      name: 'Jericho branch',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_jericho_npfheb.jpg',
      imageAlt: 'Come and worship with us this and evry sabbath.',
      branch: 'Service at Jericho',
    },
    {
      id: 1,
      name: 'Jericho branch',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_marriage_lo2fld.jpg',
      imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      branch: 'Marriage blessing at Jericho',
    },
   
  ]
  
  export const Gallery = () =>{
    return (
<div className="bg-white dark:bg-slate-900">
      <div className="mt-32 mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-tertiaryOne">Our Album</h2>

        <div className="mt-2 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative h-72 w-full overflow-hidden rounded-lg bg-gray-300 transition-transform hover:scale-125">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center hover:opacity-75"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">{product.name}</h3>
                </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white dark:text-white">{product.branch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 flex justify-center items-center">  
    <a
     href="gallery">
    <button
    
          type="button"
          data-aos="fade-left"
          className='py-1 px-2 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-md outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
         ><span>See more</span>
         
        </button>
        </a>
        </div>
    </div>

)
}