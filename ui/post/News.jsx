/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { memo } from 'react';
import { PostsCollection } from '../../api/collections/posts.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../components/spinner/Loading';
import { Cloudinary } from 'meteor/socialize:cloudinary';
// import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';
import {
  FacebookShareButton,
  WhatsappShareButton,

  FacebookIcon,
  WhatsappIcon,

} from 'react-share';

export const News = () => {
  const shareUrl = 'https://ims-ghanafield.meteorapp.com/news';
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
         <div className="relative px-4 sm:px-6 lg:px-8 rounded-md shadow-slate-500">
        <div className="mx-auto max-w-prose text-lg">
        <AdvancedImage
          className="h-full group-hover:opacity-75"
          cldImg={ img1 }
          width={ 1310 }
          height={ 873 }
          />
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <span className="ml-2 mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-primary bg-opacity-75  w-16 h-7 font-serif text-white">
                <a href={post.category.href} className="hover:underline">
                  {post.category}
                </a>
              </span>
              <a href={post.href} className="mt-2 block">
                <p
                  className="text-xl font-semibold text-gray-900"
                >
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
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
              <div className="ml-4">
            <WhatsappShareButton url={ shareUrl }>
              <WhatsappIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25" />
            </WhatsappShareButton>
          </div>
          <div className="ml-4">
            <FacebookShareButton url={ shareUrl }>
              <FacebookIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25" />
            </FacebookShareButton>
          </div>
            </div>
         </div>
        </div>
        </div>
        </>
    );
  });

  return (
      <div id='home' className="relative overflow-hidden bg-transparent py-16">
            <ul
              role="list"
              className=""
            >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
  );
};
