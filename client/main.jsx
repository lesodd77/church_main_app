
/* eslint-disable import/no-unresolved */
// @ts-nocheck
import React, { Suspense } from 'react';
import { Loading } from '../ui/components/spinner/Loading';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '../ui/App';

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(
    <>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
      ;
    </>,
  );
});
