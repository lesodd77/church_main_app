// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const about = [
  {
    name: 'Simon Agbey',
    imageUrl: './img/node.png',
    bio:
      'FullStack web developer specialist in web app. Founder of Solution Web Dev.',
    twitterUrl: 'https://twitter.com/SimonAgbey3',
    linkedinUrl: 'https://www.linkedin.com/in/simon-webdev-95169b23b',
  },
  // More people...
];

export const About = () => {
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
    <div className="mt-16 bg-slate-700 dark:bg-slate-900 shadow-lg">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <h2
          className="mt-5 text-3xl text-sky-400 dark:text-sky-400 font-extrabold tracking-tight sm:text-4xl"
          data-aos="flip-left"
        >
          About Us
        </h2>
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">

            <p className="text-xl text-white dark:text-slate-300" data-aos="flip-left">
            I'm a Fullstack web developer in Ghana. I have passion for
              front-end and back-end development. I am a well organised person,
              I solve 
  <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span className="relative text-white">problems</span>
  </span>
  in diverse ways. One thing I love about myself is
              I'm never tired of learning new things.
              </p>
          </div>
          <div className="lg:col-span-2" data-aos="fade-left">
            <ul
              role="list"
              className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
            >
              {about.map(about => (
                <li key={about.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="group flex items-center aspect-w-3 aspect-h-2 bg-[#03050f27] rounded-2xl shadow-lg sm:aspect-w-3 sm:aspect-h-4 sm:hover:bg-gray-300 sm:hover:ring-sky-400">
                    <a
                       href="about">
                       <img
                        className="object-cover rounded-3xl px-4"
                        data-aos="zoom-in"
                        src={about.imageUrl}
                        alt=""
                      />
                </a>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg text-sky-400 dark:text-slate-300 leading-6 font-medium space-y-1">
                          <h3 className="dark:text-sky-400">{about.name}</h3>
                        </div>
                        <div className="text-lg">
                          <p className="text-white dark:text-slate-300">{about.bio}</p>
                        </div>
                        <ul
                          role="list"
                          className="flex space-x-5"
                          data-aos="flip-right"
                        >
                          <li>
                            <a
                              href={about.twitterUrl}
                              className="text-sky-400 dark:text-sky-400 hover:text-sky-400"
                            >
                              <span className="sr-only">Twitter</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={about.linkedinUrl}
                              className="text-sky-400 dark:text-sky-400 hover:bg-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
