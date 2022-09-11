// @ts-nocheck
import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { MainRoutes } from '../app/ui/components/mainRoutes/MainRoutes';
import { Loading } from  '../app/ui/components/spinner/Loading';

Meteor.startup(() => {
  render(<Suspense fallback={<Loading />}>
  <MainRoutes/>
  </Suspense>, document.getElementById('react-target'));
});
