// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon,  MenuIcon, XIcon } from '@heroicons/react/outline';
import { SearchBar  } from '../search/SearchBar';
import AOS from 'aos';
import 'aos/dist/aos.css';


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
      <Disclosure as="nav" className="w-full text-gray-700  h-20 fixed top-0 animated z-40 bg-white dark:bg-slate-900 shadow-lg" data-aos="fade-down">
        {({ open }) => (
          <>
            <div id='nav' className="max-w-7xl mx-auto px-4 z-10 :px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-gray-200 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500" data-aos="fade-down">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="text-slate-800 dark:text-white block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="text-slate-800 dark:text-white block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <a href='/'>
                    <img
                      className="block lg:hidden h-8 w-auto rounded-full shadow-lg shadow-cyan-500/50"
                      src="./img/simon.png"
                      alt="Meteor-simon-agbey-logo"
                    />
                      </a>
                     <a href='/'>
                    <img
                      className="hidden lg:block h-8 w-auto rounded-full shadow-lg shadow-cyan-500/50"
                      src="./img/simon.png"
                      alt="Meteor-simon-agbey-logo"
                      />
                      </a>
                  </div>
                  <div className="hidden md:ml-8 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                 
                </div>
                <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full">
                       About Us
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               About
                              </a>
                            )}
                          </Menu.Item>
                          
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="testimonials"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
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
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
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
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full">
                       Publications
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Doctrine
                              </a>
                            )}
                          </Menu.Item>
                          
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                         Sabbath School
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
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
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="text-md ml-4 font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full">
                       Services
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                             Volutary Work
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               Health Centers
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        
                      </Menu.Items>
                    </Transition>
                    </Menu>
                    <div className="flex items-center">
                    <div id='nav' className="flex-shrink-0">
                    <a
                      href="news"
                      type="button"
                      className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full"
                    >
                      <span>News</span>
                    </a>
                  </div>
                </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative p-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <SearchBar className="h-5 w-5 text-gray-400 dark:text-white" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-lg bg-slate-200 dark:bg-slate-800 py-2 pl-8 pr-2 leading-5 placeholder-gray-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="text-md font-bold bg-transparent relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:text-white rounded-r-full"
                    >
                      {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                    </div>
                    
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href="#"
                      type="button"
                      className="bg-slate-200 text-md font-bold shadow-lg dark:bg-slate-800 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      <span>Login</span>
                    </a>
                  </div>
                 
                </div>
              </div>
            </div>
         {/*  Mobile */}
          <Disclosure.Panel className="md:hidden bg-slate-100 dark:bg-slate-900 rounded-b-2xl shadow-md shadow-cyan-500/50">
          <div onClick={() => setNavbarOpen(!open)} className="pt-2 pb-3 space-y-1">
            {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
          
                  <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="bg-slate-50 backdrop:text-md font-bold shadow-md shadow-cyan-900/50 dark:bg-slate-900 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                  <div className='p-0'>
                 <Menu as="div" className="relative z-40 inline-block text-left py-3">
                    <div>
                      <Menu.Button className="bg-slate-50 backdrop:text-md font-bold shadow-md shadow-cyan-900/50 dark:bg-slate-900 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full">
                       About Us
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-50  divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-3">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                               About
                              </a>
                            )}
                          </Menu.Item>
                         
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="testimonials"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                          Testimonials
                              </a>
                            )}
                          </Menu.Item>
                       
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/contact"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
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
                    <Menu as="div" className="relative z-30 inline-block text-left py-3">
                    <div>
                      <Menu.Button className="bg-slate-50 backdrop:text-md font-bold shadow-md shadow-cyan-900/50 dark:bg-slate-900 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full">
                       Publications
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="about"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Doctrine
                              </a>
                            )}
                          </Menu.Item>
                          
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                         Sabbath School
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
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
                    <Menu as="div" className="relative z-20 inline-block text-left py-3">
                    <div>
                      <Menu.Button className="bg-slate-50 backdrop:text-md font-bold shadow-md shadow-cyan-900/50 dark:bg-slate-900 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full">
                       Services
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-50  divide-y divide-gray-100  hover:bg-sky-500/80 focus:outline-none">
                        <div onClick={() => setNavbarOpen(!open)} className="py-3">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Volutary
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                              Health Center
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
                      className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full"
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