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
    <div className=" bg-white mt-20 m-4 dark:bg-slate-900 ">
    <section aria-labelledby="features-heading" className="relative mt-20">
      <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
        <img
          src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
          alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
          className="h-full w-full object-cover object-center rounded-md lg:h-full lg:w-full"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
        <div className="lg:col-start-2">
          <h2 id="features-heading" className="font-medium text-gray-500 dark:text-white">
            Leatherbound Daily Journal
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">All in the Details</p>
          <p className="mt-4 text-gray-500 dark:text-white">
            We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
            use.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
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
