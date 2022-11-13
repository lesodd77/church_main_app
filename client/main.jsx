/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { Suspense } from 'react';
import { Loading } from '../ui/components/spinner/Loading';
import { createRoot} from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '../ui/App';
import { Cloudinary } from 'meteor/socialize:cloudinary';

const { settings } = Meteor;
Cloudinary.config({
  cloud_name: settings.public.cloudinary_cloud_name,
  api_key: settings.public.cloudinary_api_key,
});

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(
    <>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      ;
    </>
  );
});
