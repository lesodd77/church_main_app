// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Passwordless } from 'meteor/quave:accounts-passwordless-react';
import { useNavigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export const Access = () => {
  const navigate = useNavigate();
  const onEnterToken = () => {
    navigate('/');
  };

  const loginWithGoogle = () => {
    Meteor.loginWithGoogle({ loginStyle: 'redirect' });
  };
  const loginWithFacebook = () => {
    Meteor.loginWithFacebook({ loginStyle: 'redirect' });
  };
  return (
  <div className="flex flex-col items-center space-y-4">
    <div>
    <Passwordless
    onEnterToken={onEnterToken}
    />
    </div>
    <button
    className="h-10 w-30 px-6 font-semibold rounded-md bg-cyan-700/75 border text-white shadow-lg"
    onClick={loginWithGoogle}>
 Login with google
    </button>
    <button
    className="h-10 w-30 px-6 font-semibold rounded-md bg-cyan-700/75 border text-white shadow-lg"
    onClick={loginWithFacebook}>
 Login with Facebook
    </button>
  </div>
  );
};
