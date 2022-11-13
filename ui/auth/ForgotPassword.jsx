// @ts-nocheck
/* eslint-disable import/no-unresolved */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useAlert } from 'meteor/quave:alert-react-tailwind';
import { RoutePaths } from '../components/general/RoutePaths';
import { useNavigate } from 'react-router-dom';
import { ErrorAlert } from '../components/alerts/ErrorAlert';

export const ForgotPassword = () => {
  const { openAlert } = useAlert();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState();

  const forgotPassword = (e) => {
    e.preventDefault();
    Accounts.forgotPassword({ email }, (error) => {
      if (error) {
        console.error(
          'Error requesting the link to create new password',
          error
        );
        setError(error);
        return;
      }
      setEmail('');
      setError(null);
      openAlert('You should recieve a reset email alert shortly!');
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className=" rounded-full px-3 py-2 text-lg font-medium">
          Forgot Password
        </h3>
        {error && <ErrorAlert message={error.reason || 'Unknown error'} />}
        <form action="" className="mt-5 flex flex-col">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="example.com"
              />
            </div>
          </div>
          <button
            onClick={() => navigate(RoutePaths.ACCESS)}
            className=" py-2 px-3 font-serif font-medium text-[18px] text-white bg-slate-900 rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
          >
            Back to Access
          </button>
          <button
            onClick={forgotPassword}
            type="submit"
            className=" py-2 px-3 font-serif font-medium text-[18px] text-white  bg-cyan-600 rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </>
  );
};
