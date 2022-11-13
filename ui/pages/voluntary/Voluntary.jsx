import React from 'react';

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    posts: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export const Voluntary = () => {
  return (
    <main className="pt-10 sm:pt-16">
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the posts
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg lg:max-w-none">
            {posts.map((posts) => (
              <div key={posts.title} className="flex flex-col overflow-hidden">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={posts.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={posts.posts.href} className="hover:underline">
                        {posts.posts.name}
                      </a>
                    </p>
                    <a href={posts.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {posts.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {posts.description}
                      </p>
                    </a>
                  </div>

                  <div className="relative overflow-hidden rounded-lg lg:h-96">
                    <div className="absolute inset-0">
                      <a href={posts.author.href}>
                        <span className="sr-only">{posts.author.name}</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={posts.author.imageUrl}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={posts.author.href} className="hover:underline">
                          {posts.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={posts.datetime}>{posts.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{posts.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
