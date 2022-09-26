import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { RoutePaths } from '../components/mainRoutes/RoutePaths';
import { useTracker } from 'meteor/react-meteor-data';
import { SignedIn } from './SignedIn';
import { ErrorStatus } from '../components/alerts/ErrorStatus'
import { object, string } from 'yup';
import { Input  } from './Input';

/* eslint-disable import/no-default-export */
export const LoginPage = () =>{
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userId = useTracker(() => Meteor.userId());
  const navigate = useNavigate();


  const validationSchema = object({
    username: string('Enter your username').required('Username is required'),
    password: string('Enter your password').required('Password is required'),
  });

  const handleError = (error, actions) => {
    if (error) {
      const errorMessage = error?.reason || 'Sorry, please try again.';
      actions.setStatus(errorMessage);
    }
    actions.setSubmitting(false);
    navigate(RoutePaths.POSTS);
  };

  const onSubmit = (values, actions) => {
    const { username, password } = values;
    if (isSignup) {
      Accounts.createUser({ username, password }, error => {
        handleError(error, actions);
      });
    } else {
      Meteor.loginWithPassword(username, password, error => {
        handleError(error, actions);
      });
    }
  };

  const formik = useFormik({
    initialValues: { username: 'simon', password: 'abc123' },
    validationSchema,
    onSubmit,
  });


  if (userId) {
    return <SignedIn />;
  }
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
        <div className='rounded-lg bg-gray-500 shadow-lg p-8'
        >
          <ErrorStatus status={formik.status} />
          <form onSubmit={formik.handleSubmit}>
            <div className='spacing-4'>
              <div
                isInvalid={formik.errors.username && formik.touched.username}
              >
                <Input
                  id="username"
                  name="username"
                  containerClassName='mt-4'
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  placeholder="Enter your username"
                />
               
              </div>
              <div
                isInvalid={formik.errors.password && formik.touched.password}
              >
                <div className='size-md'>
                  <Input
                    name="password"
                    id='email'
                    label='Email'
                   containerClassName='mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />
                  <div className='width-4.5rem'>
                    <button
                               className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
               
              </div>
              {!isSignup && (
                <>
                  <div spacing={10}>
                    <button
                        className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
                      isLoading={formik.isSubmitting}
                    >
                      Sign in
                    </button>
                  </div>
                  <div spacing={10}>
                    <button onClick={() => setIsSignup(true)}>
                      Create a new account
                    </button>
                  </div>
                </>
              )}

              {isSignup && (
                <>
                  <div className='spacing-10'>
                    <button
                               className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
                      isLoading={formik.isSubmitting}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className='spacing-10'>
                    <button onClick={() => setIsSignup(false)}>
                      I have an account
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
