import { Meteor } from 'meteor/meteor'
import React, { memo } from 'react'
import { VideoPostsCollection } from '../../../api/collections/videoposts.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../../components/spinner/Loading'
const categories = [
    {
      name: 'Kakasunanka',
      href: 'gallery',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_kakasunanka_redvvd.jpg',
    },
    {
      name: 'Teshie',
      href: 'gallery',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
    },
    {
      name: 'Teshie',
      href: 'gallery',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
    },
    {
      name: 'Atadeka',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_atadeka_co0jsw.jpg',
    },
    {
      name: 'Hohoe Camp meeting',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_hohoe_cm_uybaxl.jpg',
    },
    { 
      name: 'Jericho', 
      href: 'gallery',
       imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_jericho_npfheb.jpg' },
  ]
  
  
export const LatestVideoPost = () => {

  const isLoading = useSubscribe('allVideoPosts')
  const videoposts = useFind(() =>
  VideoPostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  )
  
  if (isLoading()) {
    return <Loading />
  }
 
  const VideoPostItem = memo(({ videopost }) => (
    <div className="bg-white dark:bg-slate-900">
    <div className="bg-white dark:bg-slate-900 py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-tertiaryOne">Our photo gallery</h2>
        <a href="gallery" className="hidden text-sm font-semibold text-indigo-600 dark:text-tertiaryOne hover:text-indigo-500 sm:block">
          Browse all images
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>

      <div className="mt-4 flow-root dark:bg-slate-900">
        <div className="-my-2 dark:bg-slate-900">
          <div className=" relative dark:bg-slate-900 box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="dark:bg-slate-900 min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={category.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  ))}