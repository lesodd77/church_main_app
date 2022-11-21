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
    return (
      <div className="mb-20 bg-transparent dark:bg-slate-900">
      <div className="">
      <div className="w-[96%] h-auto">
        <AdvancedImage
                  className="object-fit h-auto w-96 md:h-36 "
                  cldImg={img}
                />
          </div>
          <a href='news' className="block mt-4">
          <span className="ml-2 mt-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-75  w-16 h-7 font-serif text-white">
                    <a href={post.href} className="hover:underline">
                      {post.category}
                    </a>
                  </span>

          </a>
          <div>
          <p className="px-2 text-xl font-semibold text-gray-900 dark:text-tertiaryOne">{post.title}</p>
            <p className=" tracking-tight px-2 mt-3 text-base text-gray-600 dark:text-slate-300 ">{post.description}</p>

          </div>
          <div className="px-2 flex items-center mt-6">
            <div className="flex-shrink-0">
            <a href='news'>
                <span className="sr-only">{post.url}</span>
                <img className="w-8 h-8 rounded-full" src={post.url} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
                <a href={post.href}><span>By &nbsp;
                  {post.author}</span></a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <span>{post.date}</span>
              </div>
            </div>

            <div className="ml-4">

            <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25"/>
          </WhatsappShareButton>
          </div>
          <div className="ml-4">

          <FacebookShareButton url={shareUrl}>
        <FacebookIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25"/>
        </FacebookShareButton>
        </div>
          </div>
        </div>
</div>

    );
  });

  return (
    <div className="overflow-hidden bg-gray-50 dark:bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:max-w-none">
        <h2 className="px-3 mt-7 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
             Our News
            </h2>

        </div>

        <ul
          role="list"
          className="mx-auto mt-7 grid max-w-lg lg:max-w-none"
        >
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </ul>
      </div>
      </div>
  );
};
