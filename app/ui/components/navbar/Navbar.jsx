import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import AOS from 'aos';
import 'aos/dist/aos.css';

const user = {
  name: 'Sampssson Abubakari',
  email: 'abukarisampson1988@gmail.com',
  imageUrl:
    'https://res.cloudinary.com/dungxxzhh/image/upload/v1663458591/ghf_images/PHOTO-2022-09-17-09-00-33_ovt328.jpg',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);
 const [query, setQuery] = useState('');
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
    
      <Disclosure as="header" className="fixed top-0 z-40 w-full bg-primary dark:bg-slate-900" data-aos="fade-down">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
              <div className="relative flex h-16 justify-between">
                <div className="relative z-10 flex px-2 lg:px-0">
                  <div className="flex flex-shrink-0 items-center">
                    <img
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
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
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
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
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
  
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                    
                    </Transition>
                  </Menu>
                </div>
              </div>
              
              <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
              <div id='nav' className="flex-shrink-0">
            
                    <a
                      href="/"
                      type="button"
                      className="relative inline-flex text-white items-center mt-3 px-2 py-0 font-serif font-bold border border-transparent rounded-md backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                      <span>Home</span>
                    </a>
                  
                  </div>
                    <Menu as="div" className="relative z-40 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex text-white items-center px-2 py-0 font-bold border border-transparent rounded-r-full  backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                       About Us
                       <img src='./log/Chevron.svg' className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                                href="gallery"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                            Gallery
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
                    <Menu as="div" className="relative z-30 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Publications
                       <img src='./log/Chevron.svg' className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                                href="videopost"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                         Video 
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
              <Menu as="div" className="relative z-30 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Services
                       <img src='./log/Chevron.svg' className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                              <a
                                href="voluntary"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                              Voluntary
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
                    <div id='nav' className="flex-shrink-0">
            
                    <a
                      href="news"
                      type="button"
                      className="relative inline-flex text-white items-center mt-3 px-2 py-0 font-serif font-bold border border-transparent rounded-md backdrop:text-md dark:bg-tertiaryOne dark:text-white hover:bg-tertiaryOne hover:text-white">
                      <span>News</span>
                    </a>
                  
                  </div>
              </nav>
            </div>
   {/* mobile navbar */}
            <Disclosure.Panel as="nav" className="lg:hidden border border-b-white " aria-label="Global">
            <div id='nav' className="flex-shrink-0">
                    <a
                      href="/"
                      type="button"
                      className="relative ml-3 mt-4 inline-flex text-white border border-b-white border-transparent items-center px-3 py-0 font-serif font-bold  rounded-r-full bg-transparent backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white"
                    >
                      <span>Home</span>
                    </a>
                  </div>
            <Menu as="div" className="relative z-40 ml-3 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex text-white border border-b-white border-transparent items-center px-3 py-0 font-bold  rounded-r-full bg-primary backdrop:text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                       About Us
                       <img src='./log/Chevron.svg' className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                                href="gallery"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                            Gallery
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
                    <div>
                    <Menu as="div" className="relative z-30 ml-3 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex border border-b-white border-transparent text-white items-center px-3 py-0 font-serif font-bold  rounded-r-full bg-primary text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Publications
                       <img src='./log/Chevron.svg' className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                                href="videopost"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                           Videos
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
              <div className="space-y-1 px-2 pt-2 pb-3">
                
              <Menu as="div" className="relative z-30 inline-block py-3 text-left">
                    <div>
                      <Menu.Button className="relative inline-flex text-white items-center px-3 py-0 font-serif font-bold border border-transparent rounded-md text-md dark:bg-transparent dark:text-white hover:bg-tertiaryOne hover:text-white">
                       Services
                       <img src='./log/Chevron.svg' className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
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
                              <a
                                href="voluntary"
                                className={classNames(
                                  active
                                  ? 'bg-tertiaryOne rounded-r-full text-white'
                                  : 'text-white',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                              Voluntary
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
              <div className="ml-3 flex items-center">
                    <div id='nav' className="flex-shrink-0">
                    <a
                      href="news"
                      type="button"
                      className="relative inline-flex text-white border border-b-white items-center px-3 py-0 font-bold border-transparent rounded-md text-md dark:text-white hover:bg-tertiaryOne hover:text-white"
                    >
                      <span>News</span>
                    </a>
                  </div>
                </div>
              <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className="relative m-3 inline-flex items-center px-3 py-1 font-bold border border-transparent text-md dark:text-white hover:text-white"
                  >
                    {theme === 'dark' ? '🌞' : '🌙'}
                    <span className="sr-only">dark mode switch</span>
                   
                  </button>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                 
                </div>
                
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }