// @ts-nocheck
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { Loading } from '../components/spinner/Loading';
import { RoutePaths } from '../components/general/RoutePaths';

export const AnonymousOnly = ({ children }) => {
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();
  const location = useLocation();
  if (isLoadingLoggedUser) {
    return <Loading />;
  }
  if (loggedUser) {
    return <Navigate to={RoutePaths.HOME} state={{ from: location }} replace />;
  }
  return children;
};
