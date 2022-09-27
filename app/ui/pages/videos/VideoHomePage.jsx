// @ts-nocheck
import { Meteor } from 'meteor/meteor'
import React, { memo } from 'react'
import { VideoPostsCollection } from '../../../api/collections/videoposts.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../../components/spinner/Loading'

export const VideoHomePage = () => {

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
    <div  className=" bg-transparent dark:bg-slate-900" data-aos="fade-right">
  <div  className="px-3 relative max-w-lg mx-auto lg:max-w-7xl">
 
            <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
            
            <video 
            loop
            controls={true}
            className="object-cover w-[100%] h-48 rounded-md hover:opacity-75">
              <source   src={videopost.videoUrl} 
              type="video/mp4" />
            </video>
          
          </div>
          
          
          <span className="ml-2 mt-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-75  w-16 h-7 font-serif text-white">
                    <a href={videopost.href} className="hover:underline">
                      {videopost.category}
                    </a>
                  </span>
          
        
          <div>
          <p id='line-clamp-1' className="px-2 text-xl font-seref font-medium text-gray-900 dark:text-tertiaryOne line-clamp-1">{videopost.title}</p>
            <p id='line-clamp-2' className=" tracking-tight px-2 mt-3 text-base text-gray-600 dark:text-slate-300 line-clamp-2">{videopost.message}</p>

          </div>
          <div className="px-2 flex items-center mt-4">
            <div className="flex-shrink-0">
            <a href='#'>
                <span className="sr-only">{videopost.image1Url}</span>
                <img className="w-8 h-8 rounded-full" src={videopost.image1Url} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
                <a href={videopost.href}><span>By &nbsp;
                  {videopost.author}</span></a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <span>{videopost.date}</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      ))
   

  return (
    <div 
     className="w-full bg-sky-50 dark:bg-slate-900">
      
        <div className="text-center">
        <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
             Video Posts
            </h2>
          </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-lg gap-7 lg:max-w-none md:grid-cols-2 lg:grid-cols-4"
        >
          {videoposts.map((videopost) => (
            <VideoPostItem key={videopost._id} videopost={videopost} />
          ))}
        </ul>
      </div>
  
  )
}
