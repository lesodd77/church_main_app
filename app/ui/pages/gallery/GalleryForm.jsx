// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Input } from '../../post/index'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const GalleryForm = () => {
  const [branch, setBranch] = useState(''); 
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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

  const saveGallery = () => {
    Meteor.call(
      'gallerys.insert',
      { branch, 
         url, 
         },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setBranch('');
          setUrl('');
          showSuccess({ message: 'Your photo saved and publish.' });
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
        className="pt-10 pb-36 px-8 bg-transparent dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-primary dark:text-tertiaryOne"
            data-aos="fade-left"
          >
            Photo Publish
          </h2>

        </div>
       

        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-primary dark:bg-slate-900 rounded-lg p-8">
            <form action="" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      <Input 
       type="url"
       label='Image Url'
       id="url"
       value={url}
       placeholder='Image Url'
       containerClassName='mt-4'
       onChange={e => setUrl(e.target.value)}
        />
      
        
       <Input 
        id='branch'
        label='branch'
        type='text'
        placeholder='Title'
        containerClassName='mt-4'
        value={branch}
        onChange={e => setBranch(e.target.value)}
        />
   
    </div> <button
          type="button"
         
          onClick={saveGallery}
          data-aos="fade-left"
          className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
         ><span>Save Publish</span>
          </button>
             
            </form>
          </div>
        </div>
      </section>
      </>
  )
}

