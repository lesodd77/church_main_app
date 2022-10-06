// @ts-nocheck
import React, { memo } from 'react'
import { CommentsCollection } from '../../api/collections/comments.collection'
import { useSubscribe, useFind } from 'meteor/react-meteor-data'
import { Loading } from '../components/spinner/Loading'

import AOS from 'aos';
import 'aos/dist/aos.css';


export const CommentList = () => {
  const isLoading = useSubscribe('allComments')
  const comments = useFind(() =>
    CommentsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } }
    )
  )
  if (isLoading()) {
    return <Loading />
  }
  const CommentItem = memo(({ comment }) => ( 
  <div  className=" bg-transparent dark:bg-slate-900" data-aos="fade-right">
  <div  className="px-3 relative max-w-lg mx-auto lg:max-w-7xl">
  <div className="px-2 flex items-center mt-6">
            <div className="flex-shrink-0">
              
                <span>&nbsp;
                  {comment.author}</span>
                  <div className="flex space-x-1 text-sm text-gray-500">
                <span>{comment.date}</span>
              </div>
           
            </div>
            <div className="ml-3">
              <div>
            <p className=" text-base text-gray-600 dark:text-slate-300 ">{comment.comment}</p>
            </div>
            </div>
          
          </div>
          
        </div>
        </div>
      ))
   
  return (
    
      
        <>
        <div className="text-center">
          <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
              Comments
          </h2>
      </div><ul
          role="list"
          className="grid gap-4 pt-7 mt-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"
      >
              {comments.map((comment) => (
                  <CommentItem key={comment._id} comment={comment} />
              ))}
          </ul>
          </>
     
  
  )
}