// @ts-nocheck
import React from 'react';

const testimonials = [

  [
    {
      content:
      'There are so many things I had to do with my old software that I just don’t do at all with Swed. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Elder Theo Adesu',
        role: 'Head of Missioary Dep.',
        imageSrc: './img/simon.png',
      },
    },
  ],
  [
    {
      content:
      'There are so many things I had to do with my old software that I just don’t do at all with Swed. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Pastor Animley Theo',
        role: 'Head of Health Dep.',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/95391198-8e00-4d44-a4a8-d9393b9ae6ed_rakrsf.jpg',
      },
    },
  ],
  [
    {
      content:
      'There are so many things I had to do with my old software that I just don’t do at all with Swed. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Elder Teye Benjamin',
        role: 'Treasure.',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663458581/ghf_images/PHOTO-2022-09-17-10-31-45_sgrba5.jpg',
      },
    },
  ],
  [
    {
      content:
      'There are so many things I had to do with my old software that I just don’t do at all with Swed. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Elder Oscar',
        role: 'Head of Family Dep.',
        imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456540/ghf_images/ghf_fl_p3uzla.jpg',
      },
    },
  ],
];

export const Testimonials = () => {
  return (
    <>

        <div className="mt-20 py-10 bg-primary bg-opacity-20 dark:bg-slate-900">

       <div className="max-w-6xl mx-auto">
          <h2
            className="mt-6 text-4xl font-bold text-center  text-primary dark:text-tertiaryOne"

          >
           Testimonies
          </h2>

        </div>
          <ul className="grid max-w-2xl grid-cols-1 gap-6 p-4 mx-auto shadow-md  sm:gap-8 lg:mt-10 lg:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

            {testimonials.map((column, columnIndex) => (
              <li key={columnIndex}>

                <ul className="space-y-6 rounded-md sm:space-y-8 bg-primary dark:slate-900">
                  {column.map((testimonial, testimonialIndex) => (
                    <li key={testimonialIndex}>
                      <figure className="relative p-6 bg-transparent rounded-lg dark:bg-slate-900 dark:text-slate-300 shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="tracking-tight text-sky-100 dark:text-slate-300">
                            {testimonial.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                          <div>
                            <div className="font-display text-sky-100 dark:text-sky-400">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sky-100 dark:text-slate-300">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden bg-transparent rounded-full h-14 w-14">
                            <img src={testimonial.author.imageSrc} alt="" />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

    </>
  );
};
