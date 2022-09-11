import React from  'react'
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
  
  export const News = ()=> {
    return (
        <><div className="bg-white">
            <section aria-labelledby="features-heading" className="relative">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/confirmation-page-01-hero.jpg"
                        alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>

                <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
                    <div className="lg:col-start-2">
                        <h2 id="features-heading" className="font-medium text-gray-500">
                            Leatherbound Daily Journal
                        </h2>
                        <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">All in the Details</p>
                        <p className="mt-4 text-gray-500">
                            We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily
                            use.
                        </p>

                        <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
        <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent publications</h2>
                        <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
                            arcu.
                        </p>
                    </div>
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
                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
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
            </div></>
    )
  }