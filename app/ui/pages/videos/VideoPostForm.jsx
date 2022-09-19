// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import AOS from 'aos';
import 'aos/dist/aos.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const VideoPostForm = () => {
  const [title, setTitle] = useState(''); 
  const [video, setVideo] = useState('');
  const [image1Url, setImage1Url] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // eslint-disable-next-line no-shadow
  const showError = ({ message }) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ message }) => {
    setSuccess(message);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const saveVideoPost = () => {
    Meteor.call(
      'videoposts.insert',
      { title, video, author, image1Url, date, category },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setTitle('');
          setvideo('');
          setImage1Url('');
          setDate('');
          setAuthor('');
      
          
          showSuccess({ message: 'Your video Post is published.' });
        }
      }
    );
  };

  useEffect(() => {
    AOS.init(
      {
        delay: 200,
        duration: 1200,
        once: false,
        // @ts-ignore
      },
      []
    );
  });
  return (
<>
      <section
        id="contact"
        className="pt-10 pb-36 px-8 bg-slate-100 dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-gray-50 dark:text-gray-50"
            data-aos="fade-left"
          >
           Video Post Form
          </h2>

        </div>
        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-slate-600 dark:bg-slate-900 rounded-lg p-8">
            <form action="" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
           
           <label htmlFor="title" className="block text-sm font-medium text-gray-100">
                Post Title
              </label>
                        <input
                          type="text"
                          id="title"
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                          placeholder="Post Title"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>
               <div>
           
           <label htmlFor="author" className="block text-sm font-medium text-gray-100">
                Author
              </label>
                        <input
                          type="text"
                          id="author"
                          value={author}
                          onChange={e => setAuthor(e.target.value)}
                          placeholder="Post Author"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>

               <div>
           
           <label htmlFor="category" className="block text-sm font-medium text-gray-100">
                Category
              </label>
                        <input
                          type="text"
                          id="category"
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          placeholder="Post Category"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>
               <div>  
           <label htmlFor="image1Url" className="block text-sm font-medium text-gray-100">
                Author Photo
              </label>
                        <input
                          type="image1Url"
                          id="image1Url"
                          value={image1Url}
                          onChange={e => setImage1Url(e.target.value)}
                          placeholder="Author Image"
                          className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        />
               </div>
<div>
           
   <label htmlFor="textarea" className="block text-sm font-medium text-gray-100">
        Video
      </label>
                <input
                  type="video"
                  id="video"
                  value={video}
                  onChange={e => setVideo(e.target.value)}
                  placeholder="Image Url"
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                />
                </div>
                <div>
           
   <label htmlFor="date" className="block text-sm font-medium text-gray-100">
        Date
      </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                />
                </div>

        
    </div>
              <button
                onClick={saveVideoPost}
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                data-aos="fade-left"
              >
                <span>Save Post</span>
              </button>
             
            </form>
          </div>
        </div>
      </section>
      </>
  )
}

