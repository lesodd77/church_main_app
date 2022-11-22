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
      <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="" />
      </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                <AdvancedImage className="h-48 w-full md:h-36 object-fit" cldImg={img1} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                <span className="ml-2 mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-75  w-16 h-7 font-serif text-white">
                    <a href={post.category.href} className="hover:underline">
                      {post.category}
                    </a>
                  </span>
                  <a href={post.href} className="mt-2 block">
                    <p id="line-clamp-1" className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p id="line-clamp-1" className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <AdvancedImage className="h-10 w-10 rounded-full" cldImg={img} />
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
        </div>
    );
  });

  return (
        <div className="w-full bg-primary bg-opacity-20 dark:bg-slate-900">

            <div className="text-center">
            <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
                 Our News
                </h2>
              </div>
            <ul
              role="list"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-3"
            >
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
            </ul>
          </div>

  );
};
