// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Dialog, Transition } from '@headlessui/react';
import { ChevronDownIcon,  MenuIcon, XIcon } from '@heroicons/react/outline';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Search } from '../../Search';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    // @ts-ignore
    }, []);
   });

  return (
      <Disclosure as="nav" className="fixed top-0 z-40 w-full h-20 text-white bg-opacity-85 bg-primary dark:bg-slate-900 " data-aos="fade-down">
        {({ open }) => (
          <>
            <div id='nav' className="z-10 px-4 mx-auto max-w-7xl :px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex">
                  <div className="flex items-center mr-2 -ml-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-gray-200 hover:bg-tertiaryTwo focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500" data-aos="fade-down">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6 text-white dark:text-white" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block w-6 h-6 text-white dark:text-white" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex items-center flex-shrink-0">
                    <a href='/'>
                    <img
                      className="block w-auto h-8 px-8 rounded-full lg:hidden"
                      src="./log/Logo.svg"
                      alt="Meteor-simon-agbey-logo"
                    />
                      </a>
                     <a href='/'>
                    <img
                      className="hidden w-auto h-8 rounded-full lg:block"
                      src="./log/Logo.svg"
                      alt="Meteor-simon-agbey-logo"
                      />
                      </a>
                  </div>
                  <div className="hidden md:ml-8 md:flex md:space-x-8">
                    <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="relative inline-flex items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                 
                </div>
                <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                <Menu as="div" className="relative inline-block py-5 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white">
                       About Us
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-full font-serif origin-top-right divide-y divide-gray-100 rounded-md shadow-lg mt-7 bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                    ? 'bg-tertiaryOne rounded-r-full text-white'
                                    : 'text-white',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               About
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                          <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="testimonials"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                          Testimonials
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/contact"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                            Contact
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    </div>
                    </div>
                    <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                    <Menu as="div" className="relative inline-block py-5 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex items-center px-3 py-0 font-bold border border-transparent divide-y divide-gray-100 rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white focus:outline-none">
                       Publications
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-md mt-7 bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="doctrine"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                              Doctrine
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                          <div className='py-1'> 
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="sabbathSchool"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                         Sabbath Sch.
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                      
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="health"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                           Books
                              </a>
                            )}
                          </Menu.Item>
                        </div>
              
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    </div>
                    </div>
                    <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                    <Menu as="div" className="relative inline-block py-5 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex items-center px-3 py-0 ml-4 font-serif font-bold border border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Services
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-full origin-top-right divide-y divide-gray-100 rounded-md mt-7 bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
              
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="health"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                             Volutary
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                          <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="health"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                               Health
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    </div>
                    </div>
                    <div className="flex items-center">
                    <div id='nav' className="flex-shrink-0">
                    <a
                      href="news"
                      type="button"
                      className="relative inline-flex items-center px-3 py-0 font-bold border border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white"
                    >
                      <span>News</span>
                    </a>
                  </div>
                </div>
                  </div>
                </div>
                <div className="flex items-center m-2">
                  <div className="flex-shrink-0">
               <Search />
   
  </div>
</div>

                <div className="flex items-center m-2">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="relative inline-flex items-center px-3 py-1 font-bold border border-transparent text-md dark:text-white hover:text-white"
                    >
                      {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                    </div>
                    
                </div>
               
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href="contact"
                      type="button"
                      className="inline-flex items-center px-3 py-2 font-serif font-medium text-white border border-transparent rounded-md shadow-lg text-md shadow-cyan-900/50 bg-tertiaryOne hover:bg-tertiaryThree" data-aos="fade-right"
                    >
                      <span>Contact Us</span>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
         {/*  Mobile */}
          <Disclosure.Panel className="md:hidden bg-primary dark:bg-primary rounded-b-2xl">
          <div onClick={() => setNavbarOpen(!open)} className="pt-2 pb-3 space-y-1">
                  <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="relative inline-flex items-center px-3 py-0 font-serif font-bold border border-transparent rounded-r-full bg-primary backdrop:text-md dark:bg-primary dark:text-white hover:bg-tertiaryOne hover:text-white"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                  <div className='p-0'>
                 <Menu as="div" className="relative z-40 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex items-center px-3 py-0 font-bold border border-transparent rounded-r-full bg-primary backdrop:text-md dark:bg-primary dark:text-white hover:bg-tertiaryOne hover:text-white">
                       About Us
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-primary focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-3">
                       
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                               About
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                          <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="testimonials"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                          Testimonials
                              </a>
                            )}
                          </Menu.Item>
                       </div>
                       <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/contact"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                            Contact
                              </a>
                            )}
                          </Menu.Item>
                         
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    </div>
                    <div>
                    <Menu as="div" className="relative z-30 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md bg-primary text-md dark:bg-primary dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Publications
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                     <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                      
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                              Doctrine
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                          <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="sabbathSchool"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                         Sabbath Sch.
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                       
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="health"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                           Books
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    </div>
                    <div>
                    <Menu as="div" className="relative z-20 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md bg-primary backdrop:text-md dark:bg-primary dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Services
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-full mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-primary hover:bg-tertiaryOne focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-3">
          
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="health"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                              Volutary
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                          <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="health"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                              Health
                              </a>
                            )}
                          </Menu.Item>
                          </div>
                        
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    </div>
                    <div className="flex items-center">
                    <div id='nav' className="flex-shrink-0">
                    <a
                      href="news"
                      type="button"
                      className="relative inline-flex items-center px-3 py-0 font-bold border border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white"
                    >
                      <span>News</span>
                    </a>
                  </div>
                </div>
            </div>
            <div>
            </div>
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
  );
};