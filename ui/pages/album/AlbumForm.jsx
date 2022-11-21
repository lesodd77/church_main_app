// @ts-nocheck
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import { Cloudinary } from 'meteor/socialize:cloudinary';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { useFind } from 'meteor/react-meteor-data';
import { AdvancedImage } from '@cloudinary/react';

export const AlbumForm = () => {
  const [branch, setBranch] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const uploads = useFind(() => Cloudinary.collection.find());

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

  const saveAlbum = () => {
    Meteor.call(
      'albums.insert',
      {
        branch,
        image,
      },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setBranch('');
          setImage('');
          showSuccess({ message: 'Your photo saved and publish.' });
        }
      },
    );
  };
  const handleImage = (files) => {
    const uploads = Cloudinary.uploadFiles(files);
    uploads.forEach(async (response) => {
      const photoData = await response;
      console.log(photoData);
      setImage(photoData.public_id);
    });
  };

  const img = Cloudinary().image(image).resize(scale(200, 200)).format('jpg');
  return (
<>
      <section
        className="pt-10 pb-36 px-8 bg-transparent dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-primary dark:text-tertiaryOne"

          >
            Photo Publish
          </h2>

        </div>

        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-primary dark:bg-slate-900 rounded-lg p-8">
            <form action="">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <input
                  type="file"
                  id="image/*"
                  accept="image/*, video/*"
                  onChange={(e) => handleImage(e.target.files)}
                  placeholder="Image"
                />

       <input
        id='branch'
        label='branch'
        type='text'
        placeholder='Title'
        value={branch}
        onChange={e => setBranch(e.target.value)}
        />
 <ul className='text-white'>
                  {uploads.map((upload) => (
                    <li key={upload._id}>
                      <img src={upload.preview} className="max-w-10 max-h-10" />
                      {upload.percent_uploaded}<span className='text-white'>%</span>
                    </li>
                  ))}
                </ul>
    </div> <button
          type="button"

          onClick={saveAlbum}
          data-aos="fade-left"
          className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
         ><span>Publish</span>
          </button>
            </form>
          </div>
        </div>
        <AdvancedImage cldImg={img} />
      </section>
      </>
  );
};
