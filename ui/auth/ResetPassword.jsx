/* eslint-disable no-shadow */
// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useAlert } from 'meteor/quave:alert-react-tailwind';
import { RoutePaths } from '../components/general/RoutePaths';
import { useNavigate, useParams } from 'react-router-dom';
import { ErrorAlert } from '../components/alerts/ErrorAlert';

export const ResetPassword = () => {
  const { openAlert } = useAlert();
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const resetPassword = (e) => {
    e.preventDefault();
    Accounts.resetPassword(token, password, (error) => {
      if (error) {
        console.error('Error try to to reset the password', error);
        setError(error);
        return;
      }
      setPassword('');
      setError(null);
      openAlert('Your new password is set, please sign in!');
      navigate(RoutePaths.ACCESS);
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className=" rounded-full px-3 py-2 text-lg font-medium">
          Reset Password
        </h3>
        {error && <ErrorAlert message={error.reason || 'Unknown error'} />}
        <form action="" className="mt-5 flex flex-col">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder="******"
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
            onClick={resetPassword}
            type="submit"
            className=" py-2 px-3 font-serif font-medium text-[18px] text-white  bg-cyan-600 rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
          >
            Set new password
          </button>
        </form>
      </div>
    </>
  );
};
