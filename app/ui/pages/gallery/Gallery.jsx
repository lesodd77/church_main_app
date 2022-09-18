import React from 'react'
const collections = [
    {
      name: "Teshie Branch",
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
      imageAlt: 'Come and worship with us this and evry sabbath.',
    },
    {
      name: "Jericho Branch",
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_jericho_npfheb.jpg',
      imageAlt: 'Come and worship with us this and evry sabbath.',
    },
    {
      name: 'Kakasunanka Branch',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_kakasunanka_redvvd.jpg',
      imageAlt: 'Come and worship with us this and evry sabbath.',
    },
    {
      name: 'Kakasunanka Branch',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_kakasunanka_redvvd.jpg',
      imageAlt: 'Come and worship with us this and evry sabbath.',
    },
  ]
  
  export const Gallery = () =>{
    return (
<div className="relative bg-white">
{/* Background image and overlap */}
<div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
  <div className="relative w-full flex-1 bg-gray-800">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_hohoe_cm_uybaxl.jpg"
        alt=""
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="absolute inset-0 bg-gray-900 opacity-50" />
  </div>
  <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
</div>

<div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
  {/* Background image and overlap */}
  <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
    <div className="relative w-full flex-1 bg-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_p_sialj4.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-50" />
    </div>
    <div className="h-48 w-full bg-white" />
  </div>
  <div className="relative py-32">
    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">Our Album</h1>
    <div className="mt-4 sm:mt-6">
      <a
        href="contact"
        className="inline-block rounded-md border border-transparent bg-primary py-3 px-8 font-medium text-white hover:bg-primary"
      >
        Visit us this and every sabbath
      </a>
    </div>
  </div>
</div>

<section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
  <h2 id="collection-heading" className="sr-only">
    Collections
  </h2>
  <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
    {collections.map((collection) => (
      <div
        key={collection.name}
        className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-w-4 sm:aspect-h-5 sm:h-auto"
      >
        <div>
          <div aria-hidden="true" className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
            <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
              <img
                src={collection.imageSrc}
                alt={collection.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
          </div>
          <div className="absolute inset-0 flex items-end rounded-lg p-6">
            <div>
              <p aria-hidden="true" className="text-sm text-white">
                Worship with us this and every sabbath
              </p>
              <h3 className="mt-1 font-semibold text-white">
                <a href={collection.href}>
                  <span className="absolute inset-0" />
                  {collection.name}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
</div>

)
}