// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { memo } from 'react';
import { VideoPostsCollection } from '../../../api/collections/videoposts.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';

export const VideoHomePage = () => {
  const isLoading = useSubscribe('myVideoPosts');
  const videoposts = useFind(() =>
    VideoPostsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } },
    ),
  );

  if (isLoading()) {
    return <Loading />;
  }

  const VideoPostItem = memo(({ videopost }) => (
    <div className=" bg-transparent dark:bg-slate-900">
      <div className="relative">
        <div className="bg-transparent dark:bg-slate-900">
          <div className="relative mx-auto max-w-lg px-3 lg:max-w-7xl">
            <div className="lg:aspect-w-16 lg:aspect-h-9 border-4 border-primary bg-opacity-20 rounded-md">
              <video
                loop
                controls={true}
                className="h-auto w-[100%] rounded-md p-4 px-2 hover:opacity-75"
              >
                <source src={videopost.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <span className="ml-2 mt-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-75  w-16 h-7 font-serif text-white">
          <a href={videopost.href} className="hover:underline">
            {videopost.category}
          </a>
        </span>

        <div>
          <a href="videopost">
            <p
              id="line-clamp-1"
              className="px-2 text-xl font-seref font-medium text-gray-900 dark:text-tertiaryOne line-clamp-1"
            >
              {videopost.title}
            </p>
            <p
              id="line-clamp-2"
              className=" tracking-tight px-2 mt-3 text-base text-gray-600 dark:text-slate-300 line-clamp-2"
            >
              {videopost.message}
            </p>
          </a>
        </div>
        <div className="px-2 flex items-center mt-4">
          <div className="flex-shrink-0">
            <a href="videopost">
              <span className="sr-only">{videopost.image1Url}</span>
              <img
                className="w-8 h-8 rounded-full"
                src={videopost.image1Url}
                alt=""
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-tertiaryOne">
              <a href={videopost.href}>
                <span>
                  By &nbsp;
                  {videopost.author}
                </span>
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <span>{videopost.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-full bg-sky-50 dark:bg-slate-900">
      <div className="text-center">
        <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
          Video Posts
        </h2>
      </div>
      <ul
        role="list"
        className="mx-auto mt-10 grid max-w-lg gap-8 lg:max-w-none md:grid-cols-2 lg:grid-cols-4"
      >
        {videoposts.map((videopost) => (
          <VideoPostItem key={videopost._id} videopost={videopost} />
        ))}
      </ul>
    </div>
  );
};
