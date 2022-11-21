// @ts-nocheck
import React, { memo } from 'react';
import { VideoPostsCollection } from '../../../api/collections/videoposts.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';
import { Cloudinary } from 'meteor/socialize:cloudinary';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';

export const VideoPost = () => {
  const shareUrl = 'https://ims-ghanafield.meteorapp.com/videopost';
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

  const VideoPostItem = memo(({ videopost }) => {
    const img = Cloudinary().image(videopost.image).resize(thumbnail().width(40).height(40)).format('jpg');
    const vid = Cloudinary().video(videopost.video).resize(thumbnail().width(40).height(40)).format('mp4');

    return (
    <div className=" bg-transparent dark:bg-slate-900">
      <div className="px-3 relative max-w-lg mx-auto lg:max-w-7xl">
        <div className="relative shadow-xl">
          <div className="bg-transparent dark:bg-slate-900">
            <div className="relative mx-auto max-w-lg px-3 lg:max-w-7xl">
              <div className="lg:aspect-w-16 lg:aspect-h-9 border-2 border-primary bg-opacity-20 rounded-md">
                  <AdvancedVideo className="h-auto w-[100%] rounded-md p-4 px-2 hover:opacity-75" cldVid={vid} />
              </div>
            </div>
          </div>
        </div>

        <span className="ml-2 mt-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-sm bg-green-600 bg-opacity-75  w-16 h-7 font-serif text-white">
          <a href={videopost.href} className="hover:underline">
            {videopost.category}
          </a>
        </span>

        <div>
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
        </div>
        <div className="px-2 flex items-center mt-4">
        <div className="flex-shrink-0">
                  <span className="sr-only">{videopost.author}</span>
                  <AdvancedImage className="w-10 h-10 rounded-full" cldImg={img} />
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
          <div className="ml-4">
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon className="w-7 h-7 rounded-full shadow-xl transition-transform hover:scale-125 hover:opacity-25" />
            </WhatsappShareButton>
          </div>
          <div className="ml-4">
            <FacebookShareButton url={shareUrl}>
              <FacebookIcon className="w-7 h-7 rounded-full shadow-xl transition-transform hover:scale-125 hover:opacity-25" />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </div>

    );
  });

  return (
    <div id="home" className="w-full bg-transparent dark:bg-slate-700">
      <div className="text-center">
        <h2 className="px-3 mt-10 py-8 text-3xl  font-serif font-medium text-center dark:text-white">
          Video Posts
        </h2>
      </div>
      <ul
        role="list"
        className="mx-auto shadow-xl mt-10 grid max-w-lg gap-5 lg:max-w-none md:grid-cols-2 lg:grid-cols-4"
      >
        {videoposts.map((videopost) => (
          <VideoPostItem key={videopost._id} videopost={videopost} />
        ))}
      </ul>
    </div>
  );
};
