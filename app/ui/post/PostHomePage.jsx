import React, { memo } from 'react'
import { PostsCollection } from '../../api/collections/posts.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../components/spinner/Loading'

import AOS from 'aos';
import 'aos/dist/aos.css';


export const PostHomePage = () => {
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
  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-1 sm:aspect-h-1 lg:aspect-w-16 lg:aspect-h-9">
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
          <p id='line-clamp-2' className="px-2 text-xl font-semibold text-gray-900 dark:text-tertiaryOne line-clamp-2">{post.title}</p>
            <p id='line-clamp-2' className=" tracking-tight px-2 mt-3 text-base text-gray-600 dark:text-slate-300 line-clamp-2">{post.message}</p>
            <a href="news"> <button className='mt-2 px-2 text-sm font-serif text-white bg-primary bg-opacity-15 hover:bg-tertiaryOne rounded-sm'>Read more</button></a>
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
          </div>
        </div>
        </div>
      ))
   
  return (
    <div  className="w-full bg-primary bg-opacity-20 dark:bg-slate-900">
      
        <div className="text-center">
        <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
             Our News
            </h2>
          </div>
        <ul
          role="list"
          className="grid gap-4 pt-7 mt-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-12"
        >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
  
  )
}