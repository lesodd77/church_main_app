//@ts-nocheck
import { Meteor } from 'meteor/meteor'
import React, { memo } from 'react'
//import { Link } from 'react-router-dom';
import { PostsCollection } from '../../api/collections/posts.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../components/spinner/Loading'

export const News = () => {
  // const [truncate, setToggleTruncate] = React.useState(true);
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
    <div className="flex flex-col bg-transparent ">
      <div className="flex flex-col justify-center flex-1 ">
        <div className="lex flex-col overflow-hidden ">
          
          
        </div>
        <div className="grid grid-cols-1">
          <div className="flex-shrink-0">
            <a href="news">
              <img
                className="object-cover w-100 h-auto rounded-t-md hover:bg-gray-300 hover:ring-sky-400"
                src={post.url}
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div  className="flex-1"> 
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.href} className="hover:underline">
                      {post.category}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-serif font-semibold text-primary  line-clamp-1">{post.title}</p>
                    <p className="font-serif  text-sm font-medium text-gray-700 line-clamp-3">{post.message}</p>
                  </a>
                </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <span className="sr-only">{post.author}</span>
                <img
                  className="w-7 h-7 rounded-full"
                  src={post.authorUrl}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900"><span>By &nbsp;
                  {post.author}</span>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
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