// @ts-nocheck
import { Meteor } from 'meteor/meteor'
import React, { memo } from 'react'
//import { Link } from 'react-router-dom';
import { PostsCollection } from '../../../api/collections/posts.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../../components/spinner/Loading'
//import { MailIcon } from '@heroicons/react/solid'

export const Post = () => {
  const isLoading = useSubscribe('allPosts')
  const posts = useFind(() =>
    PostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  )
  const removePost = (event, _id) => {
    event.preventDefault()
    Meteor.call('posts.remove', { postId: _id })
  }
  const updatePost = (event, _id) => {
    event.preventDefault()
    Meteor.call('posts. update', { postId: _id })
  }
  if (isLoading()) {
    return <Loading />
  }

  const PostItem = memo(({ post }) => (
    <div className="flex flex-col p-1 bg-transparent rounded-lg shadow-2xl m-7">
      <div className="flex flex-col justify-center flex-1 bg-white rounded-md">
        <dl className="flex flex-col justify-between flex-grow mt-1"></dl>
        <div className="flex items-center justify-between mt-5 ml-4">
          {/* <div>
            <a
              href="#"
              onClick={(event) => removePost(event, post._id)}
              className="text-red-600 hover:text-red-900"
            >
              <span className="relative inline-flex items-center px-3 py-0 font-bold border border-transparent rounded-r-full shadow-lg text-md bg-sky-50 shadow-cyan-500/50 hover:bg-slate-500/70 dark:text-red-500/80 dark:hover:text-red-500">
                Delete
              </span>
            </a>
          </div> */}
          {/* <div>
              <a
                href="#"
                onClick={(event) =>  updatePost(event, post._id)}
                className="inline-flex text-green-600 items-right hover:text-red-900"
                
              >
                <span className="relative inline-flex items-center px-3 py-0 font-bold border border-transparent rounded-l-full shadow-lg bg-sky-50 text-md shadow-cyan-900/50 dark:text-sky-500/80 hover:bg-sky-500/70 dark:hover:text-white">Update</span>
              </a>
              </div> */}
        </div>
        <div className="grid grid-cols-1 ml-4 divide-y">
          <div className="flex-shrink-0">
            <a href="news">
              <img
                className="object-cover w-full h-48 -ml-2 rounded-md"
                src={post.url}
                alt=""
              />
            </a>
          </div>
          <div className="flex flex-col justify-center flex-1 p-5 -ml-2 bg-white rounded-md">
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-indigo-600">
                <a href="news">{post.category}</a>
              </p>
              <a href="#">
                <p className="text-xl font-semibold text-gray-900 truncate line-clamp-3 hover:line-clamp-none">
                  {post.title}
                </p>
              </a>

              <p className="mt-3 text-base text-gray-500 truncate line-clamp-3 hover:line-clamp-none">
                {post.textarea}
              </p>
              <a href="#" className="text-cyan-500">
                Read more
              </a>
            </div>
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0">
                <span className="sr-only">{post.author}</span>
                <img
                  className="w-10 h-10 rounded-full"
                  src={post.image1Url}
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {post.author}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>Date :{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
    </div>
  ))

  return (
    <div className="w-full bg-transparent dark:bg-slate-700">
      
        <div className="text-center">
        <h2 className="px-3 py-8 text-4xl font-bold text-center dark:text-white">
             Our News
            </h2>
          </div>
        <ul
          role="list"
          className="grid max-w-lg gap-4 mx-auto mt-12 lg:max-w-none lg:grid-cols-4"
        >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
  
  )
}
