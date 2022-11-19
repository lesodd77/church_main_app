// @ts-nocheck
import React, { memo } from 'react';
import { PostsCollection } from '../../app/api/collections/posts.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../components/spinner/Loading';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

export const Widget = () => {
  const shareUrl = 'https://ims-ghanafield.meteorapp.com/news';
  const isLoading = useSubscribe('allPosts');
  const posts = useFind(() =>
    PostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } },
    ),
  );
  if (isLoading()) {
    return <Loading />;
  }
  const PostItem = memo(({ post }) => (
    <div className="flex flex-col items-right">
      <div className="ml-8 flex h-min w-56 flex-col divide-y divide-white/10 rounded-xl border border-white/10 bg-black/10 px-4 py-1">
        <div className="flex justify-between py-2">
          <h2 className="text-sm font-semibold text-gray-100">{post.title}</h2>
          <button className="rounded-md bg-cyan-700 px-2 text-xs font-medium text-gray-300">
            View
          </button>
        </div>
      </div>
      <div className="space-x-4 m-4 flex">
        <div className="ml-4">
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon className="w-7 h-7 rounded-full transition-transform hover:scale-125 hover:opacity-25" />
          </WhatsappShareButton>
        </div>
        <div className="ml-4">
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon className="w-8 h-8 rounded-full transition-transform hover:scale-125 hover:opacity-25" />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  ));

  return (
    <ul
      role="list"
      className="grid gap-4 pt-7 mt-5 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-12"
    >
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
