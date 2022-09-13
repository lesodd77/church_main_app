// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { memo } from 'react'; 
//import { Link } from 'react-router-dom';
import { PostsCollection } from '../../../api/collections/posts.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';
//import { MailIcon } from '@heroicons/react/solid'


export const Post = () => {
    const isLoading = useSubscribe('allPosts');
    const posts = useFind(() =>
   PostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
    );
    const removePost = (event, _id) => {
      event.preventDefault();
      Meteor.call('posts.remove', { postId: _id });
    };
    const updatePost = (event, _id) => {
      event.preventDefault();
      Meteor.call('posts. update', { postId: _id });
    };
    if (isLoading()) {
      return <Loading />;
    }

    const PostItem = memo(({ post }) =>  (
      <div className="mt-4 m-7 flex p-1 flex-col bg-sky-50 rounded-lg shadow-2xl dark:bg-slate-700 ">
      <div className="flex flex-1 flex-col justify-center bg-white rounded-md">
       
               <dl className="mt-1 flex-grow flex flex-col justify-between">
              
              </dl>
              <div className="mt-5 ml-4 flex items-center justify-between">
              {/* <div>
              <a
                href="#"
                onClick={(event) => removePost(event, post._id)}
                className="text-red-600 hover:text-red-900"
                
              >
                <span className="bg-sky-50 text-md font-bold shadow-lg shadow-cyan-500/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-red-500/80 hover:bg-slate-500/70 dark:hover:text-red-500 rounded-r-full">Delete</span>
              </a>
              </div> */}
              {/* <div>
              <a
                href="#"
                onClick={(event) =>  updatePost(event, post._id)}
                className="inline-flex items-right text-green-600 hover:text-red-900"
                
              >
                <span className="bg-sky-50 text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-sky-500/80 hover:bg-sky-500/70 dark:hover:text-white rounded-l-full">Update</span>
              </a>
              </div> */}
              </div>
               
                <div className="ml-4 grid grid-cols-1 divide-y">
                <div className="flex-shrink-0">
                  <a href='post'>
                <img className="-ml-2 h-48 w-full object-cover rounded-md" src={post.url} alt="" />
                </a>
              </div>  
                <div className="-ml-2 flex flex-1 flex-col justify-center bg-white p-5 rounded-md">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                  <a href='post'>
                      {post.category}
                      </a>
                  </p>
                  <a href='post'>
                    <p className="text-xl font-semibold text-gray-900 line-clamp-1 hover:line-clamp-none">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 line-clamp-2 hover:line-clamp-none">{post.textarea}</p>
 
                    </a>
                </div>
                  <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                   
                      <span className="sr-only">{post.author}</span>
                      <img className="h-10 w-10 rounded-full" src={post.image1Url} alt="" />
                   
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
       </div>                     </div>
                          </div>
        
            
   
        
        
     ));
      
    return (
       <div className="bg-slate-200 dark:bg-slate-700 w-full divide-y divide-gray-300">
        <div className="mt-10">
        <div className="text-center">
        <h2 className="text-4xl font-bold text-center dark:text-white">
              Our News
            </h2>
        </div>
         <ul role="list" className="mx-auto mt-12 grid max-w-lg gap-4 lg:max-w-none lg:grid-cols-4">
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    )};