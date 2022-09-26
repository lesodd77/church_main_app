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
  <div  className=" bg-primary bg-opacity-20 dark:bg-slate-900" data-aos="fade-right">
  <div  className="relative max-w-lg mx-auto lg:max-w-7xl">
  <div className="flex-shrink-0">
            <a href="news">
              <img
                className="object-cover w-full h-auto rounded-md transition-transform hover:scale-125"
                src={post.url}
                alt=""
              />
            </a>
          </div>
          <a href='news' className="block mt-4">
          <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-40  w-16 h-7 font-serif text-white">
                    <a href={post.href} className="hover:underline">
                      {post.category}
                    </a>
                  </span>
            <p className="px-2 text-xl font-semibold text-gray-900 dark:text-tertiaryOne truncate">{post.title}</p>
            <p className="px-2 mt-3 text-base text-gray-600 dark:text-slate-300 truncate">{post.message}</p>
          </a>
          <div className="px-2 flex items-center mt-6">
            <div className="flex-shrink-0">
              <a href='news'>
                <span className="sr-only">{post.authorUrl}</span>
                <img className="w-7 h-7 rounded-full" src={post.authorUrl} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
                <a href={post.href}>{post.author}</a>
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
          className="m-3 grid gap-5 pt-7 mt-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-12"
        >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
  
  )
}