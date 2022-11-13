/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSubscribe } from 'meteor/react-meteor-data';
import { Loading } from '../../components/spinner/Loading';

export const LatestVideoPost = () => {
  const isLoading = useSubscribe('allVideoPosts');

  if (isLoading()) {
    return <Loading />;
  }
};
