import React, {useEffect} from 'react'
import { Testimonials } from './testimonials/Testimonials'
import AOS from 'aos';
import 'aos/dist/aos.css';
//import { PostHomePage } from '../post/PostHomePage';
import { Gallery } from './gallery/Gallery'


const posts = [
  {
    title: 'Marriage blessing by Pastor Bernard',
    href: 'news',
    category: { name: 'Article', href: 'news', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'One soul, our Brother in the faith of Jesus Richard Carbajal, was baptized last Sabbath, on September. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Pastor Bernard Condua',
      href: 'news',
      imageUrl:
        'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_p_sialj4.jpg',
    },
    readingTime: '6 min',
  },
  {
    title: 'Missionary visit to New Ebirim by Elder Budu  and Elder Theo',
    href: 'news',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'One soul, our Brother in the faith of was baptized last Sabbath, on September. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Elder Budu ',
      href: 'news',
      imageUrl:
        'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_secretary_br0nmx.jpg',
    },
    readingTime: '4 min',
  },
  {
    title: 'Baptism at Jericho by Elder Reachard Dalmeida',
    href: 'news',
    category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
    description: 'One soul, our Brother in the faith of Jesus Richard Carbajal, was baptized last Sabbath, on September. Sapien tortor lacus arcu.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Elder Rechard Dalmeida',
      href: 'news',
      imageUrl:
        'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_vp_n6xscc.jpg',
    },
    readingTime: '11 min',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Hero = () => {
 
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
    <main>
      <div className=" mt-20 ">
      <div class="aspect-w-16 aspect-h-9">
                  <video
                    className="block object-cover w-100 h-full"
                    src="./ghf_video/Banner-en.mp4"
                    type="video/mp4" 
                    background-size='cover' 
                    background-repeat= 'no-repeat'
                    autoPlay muted loop
                    alt="church-sda-reform-ims-ghana-field"
                  />
                  </div>
        </div>
            
            
  {/* <PostHomePage />
        */}
        <> 
      <div  className="px-4 pt-14 pb-20 bg-primary bg-opacity-20 dark:bg-slate-900 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28" data-aos="fade-right">
      <div  className="relative max-w-lg mx-auto lg:max-w-7xl">
      <div className="relative max-w-lg mx-auto  lg:max-w-7xl">
       <h1 className="flex items-center justify-center mt-1 text-3xl font-bold text-primary dark:text-tertiaryOne">Latest News</h1> 
         </div>
        <div  className="grid gap-16 pt-7 mt-5 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12" data-aos="fade-right">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href='news' className="inline-block">
                  <span
                    className={classNames(
                      post.category.color,
                      'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                    )}
                  >
                    {post.category.name}
                  </span>
                </a>
              </div>
              <a href='news' className="block mt-4">
                <p className="text-xl font-semibold text-gray-900 dark:text-tertiaryOne">{post.title}</p>
                <p className="mt-3 text-base text-gray-500 dark:text-slate-300">{post.description}</p>
              </a>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <a href='news'>
                    <span className="sr-only">{post.author.name}</span>
                    <img className="w-10 h-10 rounded-full" src={post.author.imageUrl} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
                    <a href={post.author.href}>{post.author.name}</a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  <Gallery />
   
   
      <Testimonials className='mt-0 py-0'/>

      <div className="relative bg-gray-900">
       <div className="relative h-56 bg-primary sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
         <img
           className="h-full w-full object-cover"
           src="https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_marriage_lo2fld.jpg"
           alt=""
         />
         <div
           aria-hidden="true"
           className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
         />
       </div>
       <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
         <div className="md:ml-auto md:w-1/2 md:pl-10">
           <h2 className="text-lg font-serif font-semibold text-gray-300">Soul winning is our priority</h2>
           <p className="mt-2 text-3xl  font-serif font-bold tracking-tight text-white sm:text-4xl">Come now, and let us reason together</p>
           <p className="mt-3 text-lg font-serif text-gray-300 line-clamp-3">
           Said the Lord, though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool. 
          
           </p>
           <span className='text-tertiaryOne'>Isaiah 1:18</span>
           <div className="mt-8">
             <div className="inline-flex rounded-md shadow">
               <a
                 href="contact"
                 className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50"
               >
                   Visit our church service
                 <div className="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
    </main>
  )
}
