import { PostItem } from './PostItem';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Loading } from '../components/spinner/Loading';

export const PostItems = ({
  posts,
  pendingCount,
  hideDone,
  setHideDone,
  isLoading,
}) => (
  <div className=' 
    mt-8
    py-2
    px-4
    pb-4
    border
    border-solid
    rounded-md bg-gray-700'>
    <div className='mt-2'>
      <div className='w-[70%]'>
        <span className='bg-primary font-xs'
        >
          You have {posts.length} {posts.length === 1 ? 'post ' : 'posts '}
          and {pendingCount || 0} pending.
        </span>
      </div>
      <div className='w-[30%] flex justify-flex-end" direction-row'>
        <button
                  className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
          onClick={() => setHideDone(!hideDone)}
        >
          {hideDone ? 'Show All posts' : 'Show Pending'}
        </button>
      </div>
    </div>
    {isLoading() ? (
      <Loading />
    ) : (
      <>
        {posts.map(post => (
          <PostItem
            key={post._id}
            post={post}
            onMarkAsDone={postId => Meteor.call('togglePostDone', { postId })}
            onDelete={postId => Meteor.call('removePost', { postId })}
          />
        ))}
      </>
    )}
  </div>
);
