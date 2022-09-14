// @ts-nocheck
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    name: 'Durable',
    description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
  },
  {
    name: 'Refillable',
    description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
  },
  {
    name: 'Thoughtfully designed',
    description:
      'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
  },
  { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
]

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
    <div className="bg-white dark:bg-slate-900">
    <section aria-labelledby="features-heading" className="relative mt-20">
    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <h1 className="flex items-center justify-center text-3xl font-bold mb-7 text-primary dark:text-white" data-aos="fade-right">About</h1>
         </div>
      <div className="overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
        <img
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
          alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
          className="object-cover object-center w-full h-full rounded-md lg:h-full lg:w-full"
        />
      </div>

      <div className="max-w-2xl px-4 pt-16 pb-24 mx-auto sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
        <div className="lg:col-start-2">
          <h2 id="features-heading" className="font-medium text-gray-500 dark:text-white">
            Leatherbound Daily Journal
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">All in the Details</p>
          <p className="mt-4 text-gray-500 dark:text-white">
            We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
            use.
          </p>

          <dl className="grid grid-cols-1 mt-10 text-sm gap-y-10 gap-x-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="font-medium text-gray-900 dark:text-white">{feature.name}</dt>
                <dd className="mt-2 text-gray-500 dark:text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  </div>
  );
};
