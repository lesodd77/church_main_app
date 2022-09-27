// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Textarea , Input } from '../../post/index'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const VideoPostForm = () => {
  const [title, setTitle] = useState(''); 
  const [videoUrl, setVideoUrl] = useState('');
  const [image1Url, setImage1Url] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
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
      { title, videoUrl, author, message, image1Url, date, category },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setTitle('');
          setVideoUrl('');
          setImage1Url('');
          setDate('');
          setAuthor('');
          setMeesage('');
      
          
          showSuccess({ message: 'Your videoUrl Post is published.' });
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
      <Input 
       type="videoUrl"
       label='Video Url'
       id="videoUrl"
       value={videoUrl}
       placeholder='video Url'
       containerClassName='mt-4'
       onChange={e => setVideoUrl(e.target.value)}
        />
       <Input 
        id='category'
        label='Category'
        type='text'
        placeholder='category'
        containerClassName='mt-4'
        value={category}
        onChange={e => setCategory(e.target.value)}
        />
        
       <Input 
        id='title'
        label='title'
        type='text'
        placeholder='Title'
        containerClassName='mt-4'
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
        
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
     
     <Input 
       type="url"
       label='image 1Url'
       id="image1Url"
       value={image1Url}
       placeholder='image1Url'
       containerClassName='mt-4'
       onChange={e => setImage1Url(e.target.value)}
        />
  <Input 
        id='date'
        label='Date'
        type='date'
        placeholder='Date'
        containerClassName='mt-4'
        value={date}
        onChange={e => setDate(e.target.value)}
/>      
    </div> <button
          type="button"
         
          onClick={saveVideoPost}
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

