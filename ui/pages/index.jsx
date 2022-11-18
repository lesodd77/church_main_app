// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Testimonials } from './testimonials/Testimonials';
import { ContactForm } from './contact/ContactForm';
import { OfficersHome } from './officers/OfficersHome';
import { Hero } from './hero/Hero';
import { Feature } from './feature/Feature';
import { VideoHomePage } from './videos/VideoHomePage';

import { PostHomePage } from '../post/PostHomePage';

const categories = [
  {
    name: 'Kakasunanka',
    href: 'gallery',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456543/ghf_images/ghf_kakasunanka_redvvd.jpg',
  },
  {
    name: 'Teshie',
    href: 'gallery',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
  },

  {
    name: 'Atadeka',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456541/ghf_images/ghf_atadeka_co0jsw.jpg',
  },
  {
    name: 'Hohoe Camp meeting',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456541/ghf_images/ghf_hohoe_cm_uybaxl.jpg',
  },
  {
    name: 'Jericho',
    href: 'gallery',
    imageSrc: 'https://res.cloudinary.com/swed-dev/image/upload/v1663456542/ghf_images/ghf_jericho_npfheb.jpg',
  },
];

export const Home = () => (
    <>
      <main>
      <Hero />
      <PostHomePage />
      <Feature />
      <OfficersHome />

      <div
className=" bg-white dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-900 py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-tertiaryOne">Our photo gallery</h2>
          <a href="gallery" className="hidden text-sm font-semibold text-indigo-600 dark:text-tertiaryOne hover:text-indigo-500 sm:block">
            Browse all images
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root dark:bg-slate-900">
          <div className="-my-2 dark:bg-slate-900">
            <div className=" relative dark:bg-slate-900 box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="dark:bg-slate-900 min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="dark:slate-900 mt-6 px-4 sm:hidden">
          <a href="news" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all post
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
      </div>

    <VideoHomePage />
        <Testimonials />

        <ContactForm />
      </main>
    </>
);
