/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { memo } from 'react';
import { PostsCollection } from '../../api/collections/posts.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../components/spinner/Loading';
import { Cloudinary } from 'meteor/socialize:cloudinary';
// import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';

export const PostHomePage = () => {
  const isLoading = useSubscribe('myPosts');
  const posts = useFind(() =>
    PostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } },
    ),
  );
  if (isLoading()) {
    return <Loading />;
  }

  const PostItem = memo(({ post }) => {
    const img = Cloudinary().image(post.image).format('jpg');
    const img1 = Cloudinary().image(post.image1).format('jpg');
    return (
      <>
        <div className="relative">
           <div className="relative h-72 w-full overflow-hidden rounded-lg group-hover:opacity-75">
            <a href="#">
              <AdvancedImage
                className="h-auto w-full object-cover object-center transition-transform hover:scale-125 "
                cldImg={img1}
              />
            </a>
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <span className="ml-2 mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-primary w-16 h-7 font-serif text-white">
                <a href={post.category.href} className="hover:underline">
                  {post.category}
                </a>
              </span>
              <a href={post.href} className="mt-2 block">
                <p
                  id="line-clamp-1"
                  className="text-xl font-semibold text-gray-900"
                >
                  {post.title}
                </p>
                <p id="line-clamp-1" className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <AdvancedImage
                    className="h-10 w-10 rounded-full"
                    cldImg={img}
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href={post.author.href} className="hover:underline">
                    {post.author}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={post.datetime}>{post.date}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div id='home' className="bg-transparent dark:bg-slate-900">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <ul
          role="list"
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-1 lg:grid-cols-4 xl:gap-x-3"
        >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};
