/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { RoutePaths } from './RoutePaths';
import { Hero } from '../../pages/hero/Hero';
import { Home } from '../../pages/index';
import { NotFound } from '../../pages/notFound/NotFound';
import { About } from '../../pages/about/About';
import { Post } from '../../post/Post';
import { PostForm } from '../../post/PostForm';
import { News } from '../../post/News';
import { ContactForm } from '../../pages/contact/ContactForm';
import { Testimonials } from '../../pages/testimonials/Testimonials';
import { ContactList } from '../../pages/admin/ContactList';
import { Cookie } from '../cookie/Cookie';
import { Privacy } from '../privacy/Privacy';
import { Health } from '../../pages/health/Health';
import { Voluntary } from '../../pages/voluntary/Voluntary';
import { Doctrine } from '../../pages/doctrine/Doctrine';
import { Album } from '../../pages/album/Album';
import { SabbathSchool } from '../../pages/sabbathschool/SabbathSchool';
import { Dashboard } from '../../pages/admin/dashboard/Dashboard';
import { NotifyEmail } from '../../pages/admin/notifyemail/NotifyEmail';
import { VideoPost } from '../../pages/videos/VideoPost';
import { VideoPostForm } from '../../pages/videos/VideoPostForm';
import { Officers } from '../../pages/officers/Officers';
import { AlbumForm } from '../../pages/album/AlbumForm';
import { Access } from '../../auth/Access';
import { AnonymousOnly } from '../../auth/AnonymousOnly';
import { RemovePost } from '../../auth/RemovePost';
import { AdminOnly } from '../../pages/admin/AdminOnly';
import { ForgotPassword } from '../../auth/ForgotPassword';
import { ResetPassword } from '../../auth/ResetPassword';
import { LoggedUserOnly } from '../../auth/LoggedUserOnly';
import { Profile } from '../../auth/Profile';

export const Main = () => (
  <>
    <ReactRoutes>
      <Route
        path={RoutePaths.HOME}
        element={
          <LoggedUserOnly>
            <Home />
          </LoggedUserOnly>
        }
      />
      <Route
        element={
          <LoggedUserOnly>
            <Profile />
          </LoggedUserOnly>
        }
        path={RoutePaths.PROFILE}
      />
      <Route
        element={
          <LoggedUserOnly>
            <RemovePost />
          </LoggedUserOnly>
        }
        path={RoutePaths.REMOVE_POST}
      />
      <Route element={<ContactForm />} path={RoutePaths.CONTACTFORM} />
      <Route element={ <LoggedUserOnly><AlbumForm /></LoggedUserOnly>} path={RoutePaths.ALBUMFORM} />
      <Route element={<About />} path={RoutePaths.ABOUT} />
      <Route element={<Testimonials />} path={RoutePaths.TESTIMONIALS} />
      <Route element={<News />} path={RoutePaths.NEWS} />
      <Route element={<VideoPostForm />} path={RoutePaths.VIDEOPOSTFORM} />
      <Route element={<VideoPost />} path={RoutePaths.VIDEOPOST} />
      <Route element={<Cookie />} path={RoutePaths.COOKIE} />
      <Route element={<SabbathSchool />} path={RoutePaths.SABBATHSCHOOL} />
      <Route element={<Album />} path={RoutePaths.ALBUM} />
      <Route element={<Voluntary />} path={RoutePaths.VOLUNTARY} />
      <Route element={<Health />} path={RoutePaths.HEALTH} />
      <Route element={<Privacy />} path={RoutePaths.PRIVACY} />
      <Route element={<Hero />} path={RoutePaths.HERO} />
      <Route element={<Doctrine />} path={RoutePaths.DOCTRINE} />
      <Route element={<Dashboard />} path={RoutePaths.DASHBOARD} />
      <Route element={<NotifyEmail/>} path={RoutePaths.NOTIFYEMAIL} />
      <Route element={<Officers />} path={RoutePaths.OFFICERS} />
      <Route element={<About />} path={RoutePaths.ABOUT} />
      <Route element={<About />} path={RoutePaths.ABOUT} />
      <Route
        element={
          <LoggedUserOnly>
            <ContactList />
          </LoggedUserOnly>
        }
        path={RoutePaths.CONTACTLIST}
      />
      <Route element={<ForgotPassword />} path={RoutePaths.FORGOT_PASSWORD} />
      <Route
        element={<ResetPassword />}
        path={`${RoutePaths.RESET_PASSWORD}/:token`}
      />
      <Route
        element={
          <AnonymousOnly>
            <Access />
          </AnonymousOnly>
        }
        path={RoutePaths.ACCESS}
      />
      <Route
        element={
          <LoggedUserOnly>
            <PostForm />
          </LoggedUserOnly>
        }
        path={RoutePaths.POSTFORM}
      />
      <Route
        element={
          <AdminOnly>
            <Post />
          </AdminOnly>
        }
        path={RoutePaths.POST}
      />
      <Route path="*" element={<NotFound />} />
      </ReactRoutes>
  </>
);
