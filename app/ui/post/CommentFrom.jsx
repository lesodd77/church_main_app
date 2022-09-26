// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../components/alerts/ErrorAlert';
import { SuccessAlert } from '../components/alerts/SuccessAlert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Textarea , Input } from './index'
//import { Cloudinary } from 'meteor/socialize:cloudinary';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const PostForm = () => {
  const [title, setTitle] = useState(''); 
  const [url, setUrl] = useState('');
  const [authorUrl, setAuthorUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] =  useState('');
  const [success, setSuccess] = useState('');
  // eslint-disable-next-line no-shadow


  // Cloudinary.config({
  //   cloud_name: 'dungxxzhh',
  //   api_key: '148712448221992',
  // });
  
  

  // onChange = (e) => {
  //   const uploads = Cloudinary.uploadFiles(e.currentTarget.files);
  //   uploads.forEach(async (response) => {
  //     const image = await response;
  //     new Photo(image).save();
  //   });

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

  const savePost = () => {
    Meteor.call(
      'posts.insert',
      { title, authorUrl, message, author, url, date, category },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setTitle('');
          setUrl('');
          setMessage('');
          
          showSuccess({ message: 'Post saved.' });
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
            Post Form
          </h2>

        </div>
       

        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-primary dark:bg-slate-900 rounded-lg p-8">
            <form action="" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
   
<Textarea
        id='message'
        label='Message'
        type='message'
        rows={2}
        containerClassName='mt-4'
        placeholder='Add your Message'         
        value={message}
        onChange={e => setMessage(e.target.value)}
       
        />
          
        <Input 
        id='author'
        label='Author'
        type='text'
        placeholder='Author'
        containerClassName='mt-4'
        value={author}
        onChange={e => setAuthor(e.target.value)}

        />
      
    </div> <button
          type="button"
         
          onClick={saveComment}
          data-aos="fade-left"
          className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
         ><span>Publish</span>
          </button>
             
            </form>
          </div>
        </div>
      </section>
      </>
  )
}

