import React from 'react'
import { Post } from './admin/Post'
import { Link } from 'react-router-dom'
import { About } from './about/About'
import { Testimonials } from './testimonials/Testimonials'
const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#', color: 'bg-indigo-100 text-indigo-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Paul York',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '6 min',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
    description:
      'Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    author: {
      name: 'Dessie Ryan',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '4 min',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#', color: 'bg-green-100 text-green-800' },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    author: {
      name: 'Easer Collins',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    readingTime: '11 min',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Hero = () => {

  return (
    <main className="relative">
      <div className="h-65 relative mx-auto mb-12 flex w-full items-center justify-center overflow-hidden">
        {' '}
        <section className="bg-backdrop-blur-md lg:mt-26 mx-auto mt-20 max-w-7xl rounded-2xl bg-white/30 px-4 dark:bg-slate-900 dark:shadow-md dark:shadow-cyan-500/50 sm:mt-32 sm:px-6 md:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span
                  className="mt-1 block text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
                  data-aos="flip-left"
                >
                  <span className="block font-serif text-primary dark:text-white">
                    Welcome to
                  </span>
                  <span className="block font-serif text-tertiaryOne">
                    Ims Ghana field
                  </span>
                </span>
              </h1>
              <p
                className="mt-3 font-serif text-base dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                data-aos="fade-left"
              >
                Where your spirituality is our concern.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <div className="mt-10 mb-7 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md">
                    <Link
                      to="contact"
                      type="button"
                      className="text-md inline-flex items-center rounded-md border border-transparent bg-tertiaryOne px-3 py-2 font-serif font-medium text-white shadow-lg shadow-cyan-900/50 hover:bg-tertiaryTwo dark:bg-tertiaryOne dark:hover:bg-tertiaryTwo"
                      data-aos="fade-right"
                    >
                      Get Started
                    </Link>
                  </div>
                  <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                    <Link
                      to="news"
                      type="button"
                      className="text-md inline-flex items-center rounded-md border border-transparent bg-tertiaryOne px-3 py-2 font-serif font-medium text-white shadow-lg shadow-cyan-900/50 hover:bg-tertiaryTwo dark:bg-tertiaryOne dark:hover:bg-tertiaryTwo"
                      data-aos="fade-right"
                    >
                      Our News
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 bg-gray-100 dark:bg-slate-900 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative mx-auto w-full rounded-lg pb-10 lg:max-w-md">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://media.istockphoto.com/videos/university-library-gifted-beautiful-black-girl-sitting-at-the-desk-video-id1214253752"
                    className="rounded-md shadow-xl"
                    frameBorder="0"
                    allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <About />
      <Post />
      <div className="bg-white dark:bg-slate-900 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
  
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <div>
                <a href={post.category.href} className="inline-block">
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
              <a href={post.href} className="mt-4 block">
                <p className="text-xl font-semibold text-gray-900 dark:text-tertiaryOne">{post.title}</p>
                <p className="mt-3 text-base text-gray-500 dark:text-slate-200">{post.description}</p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href={post.author.href}>
                    <span className="sr-only">{post.author.name}</span>
                    <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
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
      <Testimonials />
    </main>
  )
}
