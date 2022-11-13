/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useAlert } from 'meteor/quave:alert-react-tailwind';
import { RoutePaths } from '../components/general/RoutePaths';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from '../components/alerts/ErrorAlert';

export const RemovePost = () => {
  const { openAlert } = useAlert();
  const navigate = useNavigate();
  const [postId, setPostId] = useState('');
  const [error, setError] = useState();

  const removePost = (e) => {
    e.preventDefault();
    Meteor.call('posts.remove', postId, (error) => {
      if (error) {
        console.error('Error try to to remove a post', error);
        setError(error);
        return;
      }
      setPostId('');
      setError(null);
      openAlert('The post removed!');
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className=" rounded-full px-3 py-2 text-lg font-medium">
          Remove Post
        </h3>
        {error && <ErrorAlert message={error.reason || 'Unknown error'} />}
        <form action="" className="mt-5 flex flex-col">
          <div>
            <label
              htmlFor="postId"
              className="block text-sm font-medium text-gray-700"
            >
              Post ID
            </label>
            <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
              <input
                id="postId"
                value={postId}
                onChange={(e) => setPostId(e.target.value)}
                className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
              />
            </div>
          </div>
          <button
            onClick={() => navigate(RoutePaths.HOME)}
            className=" py-2 px-3 font-serif font-medium text-[18px] text-white bg-slate-900 rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
          >
            Back to Home
          </button>
          <button
            onClick={removePost}
            type="submit"
            className=" py-2 px-3 font-serif font-medium text-[18px] text-white  bg-cyan-600 rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
          >
            Remove
          </button>
        </form>
      </div>
    </>
  );
};
