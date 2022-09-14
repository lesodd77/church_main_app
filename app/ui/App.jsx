

import React from 'react';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

export const App = () => { 
   
      return (
        <div id='home' className="flex flex-col w-full h-full dark:bg-transparent">
          <Header />
          <div className="grow">
            <Outlet />
          </div>
          <Footer/>
        </div>
      );
      }