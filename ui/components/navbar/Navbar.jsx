// @ts-nocheck
import { Meteor } from 'meteor/meteor';
import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLoggedUser } from 'meteor/quave:logged-user-react';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../general/RoutePaths';

function classNames (...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();

  const navigate = useNavigate();

  const [, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);
  const [, setQuery] = useState('');
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

  return (
    <Disclosure
      as="header"
      id="nav"
      className="fixed top-0 z-40 w-full croll-smooth bg-primary dark:bg-slate-900"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    id="logo"
                    className="block h-10 w-auto"
                    src="./log/ims-logo.png"
                    alt="ims-ghana-sda-reform-church"
                  />
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-300"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      onChange={(e) => setQuery(e.target.value.toLowerCase())}
                      className="block w-full rounded-md border font-serif border-transparent bg-primary_2 dark:bg-slate-800 py-0 pl-10 pr-3 text-sm placeholder-gray-600 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-primary focus:outline-none focus:ring-white sm:text-sm"
                      placeholder="What are you searching?"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open
                    ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      )
                    : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <button
                  type="button"
                  onClick={handleThemeSwitch}
                  className="relative inline-flex items-center px-3 py-1 font-bold border border-transparent text-md dark:text-white hover:text-white"
                >
                  {theme === 'dark' ? '🌞' : '🌙'}
                  <span className="sr-only">dark mode switch</span>
                </button>
               {/* user */}
               {!isLoadingLoggedUser && loggedUser && (
                 <div className="space-y-1 px-2 pt-2 pb-3">
              <Menu
                as="div"
                className="relative z-20 inline-block py-3 text-left"
              >
                <div>
                  <Menu.Button className="relative inline-flex  text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-full text-md dark:bg-transparent dark:text-white">
                   <img
                      src="./img/simon.png"
                      className="w-6 h-6 ml-2 -mr-1"
                      aria-hidden="true"
                    />
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
                <Menu.Items className="absolute left-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-primary dark:bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div onClick={() => setNavbarOpen(!open)} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-sm text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                          Settings
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                         <button
                             onClick={() => Meteor.logout()}
                             type='button'
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-sm text-white'
                                : 'text-white',
                              'block w-full px-4 py-2 text-left text-sm',
                            )}
                          >
                           Sign Out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
               )}
      <div className="flex-auto text-sm font-medium text-white mt-2">
    {loggedUser?.email}
     </div>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {!isLoadingLoggedUser && !loggedUser && (
                        <button
                          onClick={() => navigate(RoutePaths.ACCESS)}
                          type="button"
                          className="h-8 w-25 px-4 font-semibold rounded-md bg-cyan-700/75 border text-white shadow-lg"
                        >
                          <span className="text-lg font-serif font-semibold">
                            Sign-up
                          </span>
                        </button>
                      )}
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
                  />
                </Menu>
              </div>
            </div>

            <nav
              className="hidden lg:flex lg:space-x-8 lg:py-2"
              aria-label="Global"
            >
              <div id="nav" className="flex-shrink-0">
                <button
                  onClick={() => navigate(RoutePaths.HOME)}
                  type="button"
                  className="relative inline-flex text-white items-center mt-3 px-2 py-0 font-serif font-bold border border-transparent rounded-md backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white"
                >
                  <span>Home</span>
                </button>
              </div>
              <Menu
                as="div"
                className="relative z-40 inline-block py-3 text-left"
              >
                <div>
                  <Menu.Button className="relative inline-flex text-white items-center px-2 py-0 font-bold border border-transparent rounded-r-full  backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                    About Us
                    <img
                      src="./log/Chevron.svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 w-full mt-5 origin-top-right divide-y divide-gray-100 rounded-md bg-primary focus:outline-none">
                    <div onClick={() => setNavbarOpen(!open)} className="py-3">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate(RoutePaths.ABOUT)}
                            type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            About
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate(RoutePaths.TESTIMONIALS)}
                            type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Testimonials
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate(RoutePaths.ALBUM)}
                            type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                           Album
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate(RoutePaths.CONTACTFORM)}
                            type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Contact
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu
                as="div"
                className="relative z-30 inline-block py-3 text-left"
              >
                <div>
                  <Menu.Button className="relative inline-flex text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                    Publications
                    <img
                      src="./log/Chevron.svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 w-full mt-5 origin-top-right divide-y divide-gray-100 rounded-md bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                    <div onClick={() => setNavbarOpen(!open)} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                           <button
                           onClick={() => navigate(RoutePaths.DOCTRINE)}
                           type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Doctrine
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.SABBATHSCHOOL)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Sabbath Sch.
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                           <button
                           onClick={() => navigate(RoutePaths.HEALTH)}
                           type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Video
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.HEALTH)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Books
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menu
                as="div"
                className="relative z-30 inline-block py-3 text-left"
              >
                <div>
                  <Menu.Button className="relative inline-flex text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                    Services
                    <img
                      src="./log/Chevron.svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 w-full mt-5 origin-top-right divide-y divide-gray-100 rounded-md bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                    <div onClick={() => setNavbarOpen(!open)} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.VOLUNTARY)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Voluntary
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.HEALTH)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Health
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <div id="nav" className="flex-shrink-0">
                <button
                   onClick={() => navigate(RoutePaths.NEWS)}
                   type="button"
                  className="relative inline-flex text-white items-center mt-3 px-2 py-0 font-serif font-bold border border-transparent rounded-md backdrop:text-md dark:bg-tertiaryOne dark:text-white hover:bg-tertiaryOne hover:text-white"
                >
                  <span>News</span>
                </button>
              </div>
            </nav>
          </div>
          {/* mobile navbar */}
          <Disclosure.Panel
            as="nav"
            className="lg:hidden border border-b-white "
            aria-label="Global"
          >
            <div id="nav" className="flex-shrink-0">
              <button
                 onClick={() => navigate(RoutePaths.HOME)}
                 type="button"
                className="relative ml-3 mt-4 inline-flex text-white border border-b-white border-transparent items-center px-3 py-0 font-serif font-bold  rounded-r-full bg-transparent backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white"
              >
                <span>Home</span>
              </button>
            </div>
            <Menu
              as="div"
              className="relative z-40 ml-3 inline-block py-3 text-left"
            >
              <div>
                <Menu.Button className="relative inline-flex text-white border border-b-white border-transparent items-center px-3 py-0 font-bold  rounded-r-full bg-primary backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                  About Us
                  <img
                    src="./log/Chevron.svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    aria-hidden="true"
                  />
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
                        <button
                        onClick={() => navigate(RoutePaths.ABOUT)}
                        type="button"
                          className={classNames(
                            active
                              ? 'bg-tertiaryOne rounded-r-full text-white'
                              : 'text-white',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          About
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => navigate(RoutePaths.TESTIMONIALS)}
                        type="button"
                          className={classNames(
                            active
                              ? 'bg-tertiaryOne rounded-r-full text-white'
                              : 'text-white',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Testimonials
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => navigate(RoutePaths.ALBUM)}
                        type="button"
                          className={classNames(
                            active
                              ? 'bg-tertiaryOne rounded-r-full text-white'
                              : 'text-white',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                         Album
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                        onClick={() => navigate(RoutePaths.CONTACTFORM)}
                        type="button"
                          className={classNames(
                            active
                              ? 'bg-tertiaryOne rounded-r-full text-white'
                              : 'text-white',
                            'block px-4 py-2 text-sm',
                          )}
                        >
                          Contact
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div>
              <Menu
                as="div"
                className="relative z-30 ml-3 inline-block py-3 text-left"
              >
                <div>
                  <Menu.Button className="relative inline-flex border border-b-white border-transparent text-white items-center px-3 py-0 font-serif font-bold  rounded-r-full bg-primary text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                    Publications
                    <img
                      src="./log/Chevron.svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
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
                          <button
                          onClick={() => navigate(RoutePaths.DOCTRINE)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Doctrine
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.SABBATHSCHOOL)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Sabbath Sch.
                          </button>
                        )}
                      </Menu.Item>
                    </div>

                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.HEALTH)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Videos
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.HEALTH)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Books
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Menu
                as="div"
                className="relative z-20 inline-block py-3 text-left"
              >
                <div>
                  <Menu.Button className="relative inline-flex text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                    Services
                    <img
                      src="./log/Chevron.svg"
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
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
                  <Menu.Items className="absolute right-0 w-full mt-5 origin-top-right divide-y divide-gray-100 rounded-md bg-primary ring-1 ring-primary ring-opacity-5 focus:outline-none">
                    <div onClick={() => setNavbarOpen(!open)} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.VOLUNTARY)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Voluntary
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={() => navigate(RoutePaths.HEALTH)}
                          type="button"
                            className={classNames(
                              active
                                ? 'bg-tertiaryOne rounded-r-full text-white'
                                : 'text-white',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Health
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div className="ml-3 flex items-center">
              <div id="nav" className="flex-shrink-0">
                <button
                   onClick={() => navigate(RoutePaths.NEWS)}
                   type="button"
                  className="relative inline-flex text-white border border-b-white items-center px-3 py-0 font-bold border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white"
                >
                  <span>News</span>
                </button>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleThemeSwitch}
                className="relative m-3 inline-flex items-center px-3 py-1 font-bold border border-transparent text-md dark:text-white hover:text-white"
              >
                {theme === 'dark' ? '🌞' : '🌙'}
                <span className="sr-only">dark mode switch</span>
              </button>
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-4">
                {!isLoadingLoggedUser && !loggedUser && (
                  <button
                    onClick={() => navigate(RoutePaths.ACCESS)}
                    type="button"
                    className="h-8 w-25 px-4 font-semibold rounded-md bg-cyan-700/75 border text-white shadow-lg"
                  >
                    <span className="text-lg font-serif font-medium">
                      Sign-up
                    </span>
                  </button>
                )}
                {/* user */}
                {!isLoadingLoggedUser && loggedUser && (
                  <div className="space-y-1 px-2 pt-2 pb-3">
               <Menu
                 as="div"
                 className="relative z-20 inline-block py-3 text-left"
               >
                 <div>
                   <Menu.Button className="relative inline-flex  text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-full text-md dark:bg-transparent dark:text-white">
                    <img
                       src="./img/simon.png"
                       className="w-6 h-6 ml-2 -mr-1"
                       aria-hidden="true"
                     />
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
                 <Menu.Items className="absolute left-0 z-10 mt-8 w-56 origin-top-right rounded-md bg-primary dark:bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                     <div onClick={() => setNavbarOpen(!open)} className="py-1">
                       <Menu.Item>
                         {({ active }) => (
                           <a
                             href="#"
                             className={classNames(
                               active
                                 ? 'bg-tertiaryOne rounded-sm text-white'
                                 : 'text-white',
                               'block px-4 py-2 text-sm',
                             )}
                           >
                           Settings
                           </a>
                         )}
                       </Menu.Item>
                     </div>
                     <div className="py-1">
                       <Menu.Item>
                         {({ active }) => (
                          <button
                          type='button'
                              onClick={() => Meteor.logout()}
                             className={classNames(
                               active
                                 ? 'bg-tertiaryOne rounded-sm text-white'
                                 : 'text-white',
                               'block w-full px-4 py-2 text-left text-sm',
                             )}
                           >
                            Sign Out
                           </button>
                         )}
                       </Menu.Item>
                     </div>
                   </Menu.Items>
                 </Transition>
               </Menu>
             </div>
                )}
      <div className="flex-auto text-sm font-medium text-white mt-2">
    {loggedUser?.email}
     </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
