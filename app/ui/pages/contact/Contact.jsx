// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
// eslint-disable-next-line import/no-unresolved
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
// eslint-disable-next-line import/no-unresolved
import { SuccessAlert } from '../../components/alerts/SuccessAlert';
import { Switch } from '@headlessui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Contact = () => {
  const [name, setName] = useState(''); // Formik
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
          showSuccess({ message: 'Contact saved.' });
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
        className="pt-10 pb-36 px-8 bg-slate-700 dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-gray-50 dark:text-gray-50"
            data-aos="fade-left"
          >
            Contact Us
          </h2>

        </div>
        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-slate-600 dark:bg-slate-900 rounded-lg p-8">
            <form action="" data-aos="fade-up">
              {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <input
                  type="text"
                  // eslint-disable-next-line react/jsx-props-no-multi-spaces
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Full Name"
                  autoComplete="name"
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50 shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-300"
                />

                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50 shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-300"
                />

                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50  shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                />

                <textarea
                  type="text"
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="bg-slate-300 dark:bg-slate-800 dark:text-gray-50 shadow-md px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                  // @ts-ignore
                  rows="5"
                  placeholder="Message"
                />
              </div>
              <div className="mt-4 sm:col-span-2">
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
                <div className="ml-3">
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
                onClick={saveContact}
                className="mt-4 inline-flex items-center px-7 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700"
                                data-aos="fade-left"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
