import React, { Fragment } from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import { App } from '../../App'
import { RoutePaths } from './RoutePaths';
import { Hero } from '../../pages/hero/Hero';
import { Home } from '../../pages/index';
import { NotFound } from '../../pages/notFound/NotFound';
import { About } from '../../pages/about/About';
import { Post } from '../../pages/admin/post/Post'
import { PostForm } from '../../post/PostForm'
import { News} from '../../post/News'
import { Contact } from '../../pages/contact/Contact';
import { Testimonials } from '../../pages/testimonials/Testimonials';
import { ContactList } from '../../pages/admin/ContactList';
import { Cookie } from '../../components/cookie/Cookie'
import { Privacy } from '../../components/privacy/Privacy'
import { Admin } from '../../pages/admin/Admin'
import { Health } from  '../../pages/health/Health';
import { Voluntary } from  '../../pages/voluntary/Voluntary';
import { Doctrine } from  '../../pages/doctrine/Doctrine';
import { Gallery } from  '../../pages/gallery/Gallery';
import { SabbathSchool } from  '../../pages/sabbathschool/SabbathSchool';
import { Dashboard } from '../../pages/admin/dashboard/Dashboard'
import { NotifyEmail } from '../../pages/admin/notifyemail/NotifyEmail'
import { VideoPost } from '../../pages/videos/VideoPost';
import { VideoPostForm } from '../../pages/videos/VideoPostForm';
import { Officers } from '../../pages/officers/Officers'


export const MainRoutes = () => {
   
  return (
    <>
    <BrowserRouter>
   
      <ReactRoutes>
           <Route path={RoutePaths.ROOT} element={<App />}>
       
           <Route element={<Home />} path={RoutePaths.HOME} />
          
            <Route element={<Hero />} path={RoutePaths.HERO} /> 
            <Route element={<ContactList/>} path={RoutePaths.CONTACTLIST} />
            <Route element={<Testimonials/>} path={RoutePaths.TESTIMONIALS} />
            <Route element={<Post/>} path={RoutePaths.POST} />
            <Route element={<Dashboard/>} path={RoutePaths.DASHBOARD} />
            <Route element={<NotifyEmail/>} path={RoutePaths.NOTIFYEMAIL} />
            <Route element={<Gallery/>} path={RoutePaths.GALLERY} />
            <Route element={<Officers/>} path={RoutePaths.OFFICERS} />
            <Route element={<Admin/>} path={RoutePaths.ADMIN} />
            <Route element={<Health/>} path={RoutePaths.HEALTH} />
            <Route element={<Voluntary/>} path={RoutePaths.VOLUNTARY} />
            <Route element={<SabbathSchool/>} path={RoutePaths.SABBATHSCHOOL} />
            <Route element={<Doctrine/>} path={RoutePaths.DOCTRINE} />
            <Route element={<News/>} path={RoutePaths.NEWS} />
            <Route element={<PostForm/>} path={RoutePaths.POSTFORM} />
            <Route element={<VideoPostForm/>} path={RoutePaths.VIDEOPOSTFORM} />
            <Route element={<VideoPost/>} path={RoutePaths.VIDEOPOST} />
            <Route element={<About/>} path={RoutePaths.ABOUT} />
            <Route element={<Cookie/>} path={RoutePaths.COOKIE} />
            <Route element={<Privacy/>} path={RoutePaths.PRIVACY} /> 
             <Route element={<Privacy/>} path={RoutePaths.PRIVACY} />
            <Route element={<Contact/>} path={RoutePaths.CONTACT} />
            <Route path="*" element={<NotFound />} />
            </Route>
         </ReactRoutes>
    
    </BrowserRouter>
  </>
    );
   }