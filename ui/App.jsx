// @ts-nocheck
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Main } from './components/general/Main';
import { AlertProvider, Alert } from 'meteor/quave:alert-react-tailwind';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

export const App = () => (
  <Router>
    <AlertProvider>
      <Header />
    <div className="bg-slate-50 h-full">
        <Alert />
        <div className="flex flex-col min-h-screen">
          <Main />
        </div>
      </div>
      <Footer />
    </AlertProvider>
  </Router>
);
