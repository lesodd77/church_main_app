import React, { Fragment } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { App } from '../../App'
import { RoutePaths } from './RoutePaths';
import { Hero } from '../../pages/index';
import { NotFound } from '../../pages/notFound/NotFound';
import { About } from '../../pages/about/About';
import { Post } from '../../pages/admin/Post'
import { PostForm } from '../../post/PostForm'
import { News} from '../../post/News'
import { Contact } from '../../pages/contact/Contact';
import { Testimonials } from '../../pages/testimonials/Testimonials';
import { ContactList } from '../../pages/admin/ContactList';
import { Cookie } from '../../components/cookie/Cookie'
import { Privacy } from '../../components/privacy/Privacy'

export const MainRoutes = () => {
   
  return (
    <Fragment>
    <BrowserRouter>
      <ReactRoutes>
           <Route path={RoutePaths.ROOT} element={<App />}>
            <Route element={<Hero />} index /> 
            <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST} />
            <Route element={<Testimonials/>} path={RoutePaths.TESTIMONIALS} />
            <Route element={<Post/>} path={RoutePaths.POST} />
            <Route element={<News/>} path={RoutePaths.NEWS} />
            <Route element={<PostForm/>} path={RoutePaths.POSTFORM} />
            <Route element={<About/>} path={RoutePaths.ABOUT} />
            <Route element={<Cookie/>} path={RoutePaths.COOKIE} />
            <Route element={<Privacy/>} path={RoutePaths.PRIVACY} /> 
             <Route element={<Privacy/>} path={RoutePaths.PRIVACY} />
            <Route element={<Contact/>} path={RoutePaths.CONTACT} />
            <Route path="*" element={<NotFound />} />
            </Route>
         </ReactRoutes>
    </BrowserRouter>
  </Fragment>
    );
   }