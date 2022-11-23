/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { memo } from 'react';
import { AlbumsCollection } from '../../../api/collections/albums.collection';
import { useSubscribe, useFind } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';
import { Cloudinary } from 'meteor/socialize:cloudinary';
// import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';

export const Album = () => {
  const isLoading = useSubscribe('myAlbums');
  const albums = useFind(() =>
    AlbumsCollection.find(
      { archived: { $ne: true } },
      { sort: { createdAt: -1 } },
    ),
  );
  if (isLoading()) {
    return <Loading />;
  }

  const AlbumItem = memo(({ album }) => {
    const img = Cloudinary().image(album.image).format('jpg');
    return (
      <>
         <div className="relative">
          <div className="relative h-72 w-full overflow-hidden rounded-lg group-hover:opacity-75">
            <a href="news">
              <AdvancedImage
                className="h-full w-full object-cover object-center transition-transform hover:scale-125 "
                cldImg={img}
              />
            </a>
          </div>
                <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-space-between overflow-hidden rounded-lg p-4">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 transition-transform hover:scale-125"
                  />
                   <p className="relative text-lg font-semibold text-transparent hover:text-white">{album.title}</p>
                  <p className="relative text-lg font-semibold text-transparent hover:text-white">{album.date}</p>
                </div>
              </div>
      </>
    );
  });

  return (
      <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">My Album</h2>
      <ul
        role="list"
        className="mt-4 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-1 lg:grid-cols-4 xl:gap-x-3"
      >
        {albums.map((album) => (
          <AlbumItem key={album._id} album={album} />
        ))}
      </ul>
    </div>
    </div>
  );
};
