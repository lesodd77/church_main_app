/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import { Switch } from '@headlessui/react';
import { Textarea } from './Textarea';
import { Input } from './Input';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [agreed, setAgreed] = useState(false);

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

  const saveContact = () => {
    Meteor.call(
      'contacts.insert',
      { name, email, subject, message, agreed },
      errorResponse => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setName('');
          setEmail('');
          setSubject('');
          setAgreed('');
          setMessage('');
          showSuccess({ message: 'Thanks for contacting Ims sda rm Ghana field.' });
        }
      }
    );
  };


  return (
    <>
      <section
        className="pt-10 pb-36 px-8 bg-white dark:bg-slate-900 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="mt-6 text-4xl font-bold text-center  text-primary dark:text-tertiaryOne"

          >
            Contact Us
          </h2>

        </div>
        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
       <div className="relative z-20 bg-primary dark:bg-slate-900 rounded-lg p-8">
         <form action="">
         {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

        <Input
        id="name"
        label="Name"
        type="text"
        placeholder="Name"
        containerClassName="mt-4"
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <Input
        id="email"
        label="Email"
        type="email"
        placeholder="Email"
        containerClassName="mt-4"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
         <Input
        id="subject"
        label="Subject"
        type="subject"
        placeholder="subject"
        containerClassName="mt-4"
        value={subject}
        onChange={e => setSubject(e.target.value)}
        />
<Textarea
        id="message"
        label="Message"
        type="message"
        rows={2}
        containerClassName="mt-4"
        placeholder="Add your Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        />

         <div className="mt-2 sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                     type="boolean"
                    id="agreed"
                    value={agreed}
                    onClick={() => setAgreed((Agreed) => !Agreed)}
                    className={classNames(
                      agreed ? 'bg-sky-600' : 'bg-gray-600',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        !agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-sky-50 shadow transform ring-0 transition ease-in-out duration-200'
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-2">
                  <p className="text-base text-gray-50 dark:text-gray-300">
                    By selecting this, you agree to the{' '}
                    <a href="privacy" className="font-medium text-gray-50 underline hover:underline decoration-3 decoration-pink-500 underline-offset-8 dark:text-gray-300">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="cookie" className="font-medium text-gray-50 underline hover:underline decoration-3 decoration-pink-500 underline-offset-8 dark:text-gray-300">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
         </div>

        <button
          type="button"
          onClick={saveContact}
          data-aos="fade-left"
          className="mt-2 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
         ><span>Send Message</span>

        </button>
            </div>
         </form>
       </div>
        </div>
      </section>
    </>
  );
};
