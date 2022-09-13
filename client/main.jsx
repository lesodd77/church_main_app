import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { Meteor } from 'meteor/meteor';
import { MainRoutes } from '../app/ui/components/mainRoutes/MainRoutes';
import { Loading } from  '../app/ui/components/spinner/Loading';

Meteor.startup(() => {
  const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
    <Suspense fallback={<Loading  />}>
    <MainRoutes/>
    </Suspense>, 
)});
;