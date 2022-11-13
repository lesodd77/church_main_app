// @ts-nocheck

import React, { memo } from 'react'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../../components/spinner/Loading'
import { GallerysCollection } from '../../../api/collections/gallerys.collection'

  export const Gallery = () =>{
    const isLoading = useSubscribe('myGallerys')
    const gallerys = useFind(() =>
    GallerysCollection.find(
        { archived: { $ne: true } },
        { sort: { createdAt: -1 } }
      )
    )
    if (isLoading()) {
      return <Loading />
    }
    const GalleryItem = memo(({ gallery }) => ( 
  
<div className="dark:bg-slate-900">
      <div className="mx-auto max-w-2xl">
      
              <div  id='brighten'  className="flow root">
                <div className="relative h-72 w-full overflow-y-hidden shadow-xl rounded-xl">
                  <img
                    src={gallery.url}
                    alt='sda-church-ims-reform-movement'
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white dark:text-white">{gallery.branch}</p>
                 
                  </div>
              </div>
            </div>
            </div>
          ))
       
  return (
    <div  className="w-full bg-white bg-opacity-20 dark:bg-slate-900">
      
    <div className="text-center">
    <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
         Gallery
        </h2>
      </div>
    <ul
      role="list"
      className="m-4 grid gap-4 pt-3 mt-4 sm:gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 "
    >
      {gallerys.map((gallery) => (
        <GalleryItem key={gallery._id} gallery={gallery} />
      ))}
    </ul>
  </div>

)
}