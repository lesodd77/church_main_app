/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const about = [
  {
    title: 'Pastor Bernard Condua',
    name: 'Head of the work in Ghana',
    imageUrl: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456542/ghf_images/ghf_p_sialj4.jpg',
    bio: ' International Missionary Society 7th day Adventist church, reform movement. Ghana',
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
      [],
    );
  });
  return (
    <>
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="./ghf_images/ghf_jericho.jpg"
          alt=""
          className="h-96 w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>
    </div>
    <div className="bg-white bg-opacity-85 shadow-md dark:bg-slate-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
          <h2
            className=" text-3xl font-extrabold tracking-tight text-sky-400 dark:text-sky-400 sm:text-4xl"
            data-aos="flip-left"
          >
            Who we are
          </h2>
          <div className="mt-7 space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <p
                className="font-serif text-gray-700 dark:text-slate-200"
                data-aos="flip-left"
              >
                We are part of the International Missionary Society which is a Christian denomination
                that takes the Bible as its foundation of faith and practice and believes in
                Jesus as the Son of God and the Redeemer. His imminent second coming to earth,
                faithfulness to the

                <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-tertiaryOne">
                  <span className="relative text-white dark:text-slate-100">Ten Commandments of God</span>
                </span>
                &nbsp; and the principle of nonviolence
                are central to the movement's fundamental beliefs. Having its roots in the
                advent message preached in the nineteenth century, the organization considers
                the preaching of the gospel to all the world to be its primary mission.

              </p>
            </div>
            <div className="lg:col-span-2" data-aos="fade-left">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {about.map((about) => (
                  <li key={about.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="group  flex items-center rounded-2xl bg-[#03050f27]  sm:hover:bg-gray-300 sm:hover:ring-sky-400">
                        <a href="about">
                          <img
                            className="flex items-center rounded-2xl sm:hover:ring-sky-400 sm:object-cover "
                            data-aos="zoom-in"
                            src={about.imageUrl}
                            alt="" />
                        </a>
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="space-y-1 text-lg font-medium leading-6 text-gray-700 dark:text-slate-700">
                            <h3 className=" dark:text-tertiaryOne">{about.title}</h3>
                          </div>
                          <div className="space-y-1 text-lg font-medium leading-6 text-gray-700 dark:text-slate-700">
                            <h3 className="text-sky-500 font-bold font-serif">{about.name}</h3>
                          </div>
                          <div className="text-lg md:mt-5">
                            <p className="text-gray-700 dark:text-slate-200">
                              {about.bio}
                            </p>
                          </div>
                          <ul
                            role="list"
                            className="flex space-x-5"
                            data-aos="flip-right"
                          >
                            <li>
                              <a
                                href={about.twitterUrl}
                                className="text-sky-400 hover:text-sky-400 dark:text-sky-400"
                              >
                                <span className="sr-only">Twitter</span>
                                <svg
                                  className="h-5 w-5"
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
                                className="text-sky-400 hover:bg-gray-500 dark:text-sky-400"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd" />
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
      </>
  );
};
