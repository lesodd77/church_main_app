//@ts-nocheck
import { Meteor } from 'meteor/meteor'
import React, { memo } from 'react'
//import { Link } from 'react-router-dom';
import { PostsCollection } from '../../api/collections/posts.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../components/spinner/Loading'
import {
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  WhatsappIcon,
  
} from 'react-share';

export const News = () => {
const shareUrl = 'https://ims-ghanafield.meteorapp.com/news';
  const isLoading = useSubscribe('allPosts')
  const posts = useFind(() =>
    PostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  )

  if (isLoading()) {
    return <Loading />
  }
 
  const PostItem = memo(({ post }) => (
    <div  className=" bg-transparent dark:bg-slate-900" data-aos="fade-right">
  <div  className="px-3 relative max-w-lg mx-auto lg:max-w-7xl">
  <div className="flex-shrink-0">
  <div className="mt-5 aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-16 lg:aspect-h-9">
              <img
                className="object-cover w-[100%] h-48 rounded-md hover:opacity-75"
                src={post.url}
                alt=""
              />
          </div>
          </div>
          <a href='news' className="block mt-4">
          <span className="ml-2 mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-75  w-16 h-7 font-serif text-white">
                    <a href={post.href} className="hover:underline">
                      {post.category}
                    </a>
                  </span>
          
          </a>
          <div>
          <p  className="px-2 text-xl font-semibold text-gray-900 dark:text-tertiaryOne">{post.title}</p>
            <p className=" tracking-tight px-2 mt-3 text-base text-gray-600 dark:text-slate-300 ">{post.message}</p>
           
          </div>
          <div className="px-2 flex items-center mt-6">
            <div className="flex-shrink-0">
              <a href='news'>
                <span className="sr-only">{post.authorUrl}</span>
                <img className="w-8 h-8 rounded-full" src={post.authorUrl} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
                <a href={post.href}><span>By &nbsp;
                  {post.author}</span></a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <span>{post.date}</span>
              </div>
            </div>

            <div className="ml-4">
            
            <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon  className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25"/>
          </WhatsappShareButton>
          </div>
          <div className="ml-4">
          
          <FacebookShareButton url={shareUrl}>
        <FacebookIcon  className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25"/>
        </FacebookShareButton>
        </div>
          </div>
        </div>
        </div>
      ))
   
  return (
    <div className="overflow-hidden bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
             Our News
            </h2>
          
        </div>
  
        <ul
          role="list"
          className="mx-auto mt-12 grid max-w-lg lg:max-w-none"
        >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
      </div>
  )
}