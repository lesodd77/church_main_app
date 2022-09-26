import React, {useEffect} from 'react'
import { Testimonials } from './testimonials/Testimonials'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Contact } from './contact/Contact'
import { OfficersHome } from './officers/OfficersHome'
import { Hero } from './hero/Hero'
import { Feature } from './feature/Feature'

import {
  ArrowUturnLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { PostHomePage } from '../post/PostHomePage';

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]
const features = [
  {
    name: 'Unlimited Inboxes',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: InboxIcon,
  },
  {
    name: 'Manage Team Members',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: UsersIcon,
  },
  {
    name: 'Spam Report',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: TrashIcon,
  },
  {
    name: 'Compose in Markdown',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Team Reporting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Saved Replies',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ArrowUturnLeftIcon,
  },
  {
    name: 'Email Commenting',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: 'Connect with Customers',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HeartIcon,
  },
]
const categories = [
  {
    name: 'Kakasunanka',
    href: 'gallery',
    imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_kakasunanka_redvvd.jpg',
  },
  {
    name: 'Teshie',
    href: 'gallery',
    imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
  },
  {
    name: 'Teshie',
    href: 'gallery',
    imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456543/ghf_images/ghf_teshie_xy1zvq.jpg',
  },
  {
    name: 'Atadeka',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_atadeka_co0jsw.jpg',
  },
  {
    name: 'Hohoe Camp meeting',
    href: '#',
    imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456541/ghf_images/ghf_hohoe_cm_uybaxl.jpg',
  },
  { 
    name: 'Jericho', 
    href: 'gallery',
     imageSrc: 'https://res.cloudinary.com/dungxxzhh/image/upload/v1663456542/ghf_images/ghf_jericho_npfheb.jpg' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Home = () => {
 
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
    <>
      <main>
      <Hero /> 
      <PostHomePage />
      <Feature />
      <OfficersHome />
        
   
      <div className="bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our photo gallery</h2>
          <a href="gallery" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Browse all images
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
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

        <div className="mt-6 px-4 sm:hidden">
          <a href="news" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all post
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
        <Testimonials  />
       
        <Contact /> 
      </main>
      </>
  )
}
  {/*        
 <section>
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
    </section>
    <div className="bg-white dark:bg-slate-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <h1 className="flex items-center justify-center mt-2 text-3xl font-bold text-primary dark:text-white">Album</h1>
         </div>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
          Some Albulm
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8"  data-aos="fade-right">
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
          <img
              src="./ghf_images/ghf_hohoe_cm.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              data-aos="fade-up"
            />
            <div aria-hidden="true" className="opacity-50 bg-gradient-to-b from-transparent to-black" />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="contact">
                    <span className="absolute inset-0" />
                    Hohoe Camp Meeting
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Join us
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-none sm:relative sm:h-full">
            <img
              src="./ghf_images/ghf_teshie.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              data-aos="fade-up"
           />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="contact">
                    <span className="absolute inset-0" />
                   Teshie church
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                 Join us
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg group aspect-w-2 aspect-h-1 sm:aspect-none sm:relative sm:h-full">
            <img
              src="./ghf_images/ghf_atadeka.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              data-aos="fade-up"
            />
            <div
              aria-hidden="true"
              className="opacity-50 bg-gradient-to-b from-transparent to-black sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="contact">
                    <span className="absolute inset-0" />
                    Atadeka Church
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Join us
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <a href="news" className="block text-sm font-semibold text-tertiaryOne hover:text-opacity-30">
           Go to our news corner
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
   
      <Testimonials className='mt-0 py-0'/>

    */}

   
    {/* <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <Post key={index} post={post.node} />
          ))}
        </div> */}
        {/* <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div> */}
      {/* </div>
    </div> */}
     

