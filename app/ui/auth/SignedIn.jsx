import { RoutePaths } from '../components/mainRoutes/RoutePaths';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SignedIn = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center">
    <div className="spacing-8 mx-auto maxW-lg py-12 px-6">
      <div className="center">
        <p className="font-4xl bg-gradient-linear(to-l, #675AAA,#4399E1)"
         
        >
          Sign in to your account
        </p>
        <p className='font-lg'>
          to start creating your simple posts
        </p>
      </div>
        </div>
        <div className='spacing-10'>
          <button
            onClick={() => navigate(RoutePaths.POSTS)}
            className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
          >
            Go to your posts
          </button>
        </div>
      </div>
  );
};
