// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Dialog, Transition } from '@headlessui/react';
import { ChevronDownIcon,  MenuIcon, XIcon } from '@heroicons/react/outline';

import AOS from 'aos';
import 'aos/dist/aos.css';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);
 const [open, setOpen] = useState(true)

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
      <Disclosure as="nav" className="w-full text-white  h-20 fixed top-0 animated z-40 bg-primary dark:bg-primary" data-aos="fade-down">
        {({ open }) => (
          <>
            <div id='nav' className="max-w-7xl mx-auto px-4 z-10 :px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-gray-200 hover:bg-tertiaryTwo focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500" data-aos="fade-down">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="text-white dark:text-white block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="text-white dark:text-white block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <a href='/'>
                    <img
                      className="block lg:hidden h-8 w-auto px-8 rounded-full"
                      src="./img/simon.png"
                      alt="Meteor-simon-agbey-logo"
                    />
                      </a>
                     <a href='/'>
                    <img
                      className="hidden lg:block h-8 w-auto rounded-full"
                      src="./img/simon.png"
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
                      className="text-md font-bold font-serif  relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne  hover:text-white rounded-md"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                 
                </div>
                <div className="flex items-center">
                  <div id='nav' className="flex-shrink-0">
                <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="text-md font-bold font-serif relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne  hover:text-white rounded-md">
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-7 w-full font-serif rounded-md shadow-lg bg-primary ring-1 ring-primary ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
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
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="text-md font-bold relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne  hover:text-white rounded-md divide-y divide-gray-100 focus:outline-none">
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-7 w-full rounded-md bg-primary ring-1 ring-primary ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
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
                    <Menu as="div" className="relative inline-block text-left py-5">
                    <div>
                      <Menu.Button className="text-md ml-4 font-bold font-serif relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne  hover:text-white rounded-md">
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-7 w-full rounded-md bg-primary ring-1 ring-primary ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
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
                      className="text-md font-bold  relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne hover:text-white rounded-md"
                    >
                      <span>News</span>
                    </a>
                  </div>
                </div>
                  </div>
                </div>
                <div className="flex items-center m-2">
                  <div className="flex-shrink-0">
                <form action="" className="relative mx-auto w-max">
        <input type="search" 
        className="peer cursor-pointer relative z-20 h-8 w-12 rounded-full border bg-transparent py-3 px-2 outline-none focus:w-full focus:cursor-text  focus:pl-12 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-y-0 my-auto h-8 w-12  border-r border-transparent stroke-gray-300 px-3.5 peer-focus:border-white peer-focus:stroke-white" 
        fill="none"
         viewBox="0 0 24 24" 
         stroke="currentColor" 
         strokeWidth="2">
          <path strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>    

   
  </div>
</div>

                <div className="flex items-center m-2">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="text-md font-bold relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:text-white"
                    >
                      {theme === 'dark' ? '🌞' : '🌙'}
                    </button>
                    </div>
                    
                </div>
                <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
               
                <div className="relative flex  flex-col justify-center overflow-hidden to-white py-4 sm:py-12">
  <div className="relative rounded-2xl px-6 pt-7 pb-8 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
    <div className="mx-auto max-w-md">


      <form action="" className="relative mx-auto w-max">
        <input type="search" 
        className="peer cursor-pointer relative z-10 h-8 w-12 rounded-full border bg-transparent py-3 px-2 outline-none focus:w-full focus:cursor-text  focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-y-0 my-auto h-8 w-12  border-r border-transparent stroke-gray-300 px-3.5 peer-focus:border-white peer-focus:stroke-white" 
        fill="none"
         viewBox="0 0 24 24" 
         stroke="currentColor" 
         stroke-width="2">
          <path stroke-linecap="round" 
          stroke-linejoin="round" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


    </div>
  </div>
</div>
</Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <a
                      href="#"
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-md font-medium font-serif rounded-md shadow-lg shadow-cyan-900/50 text-white bg-tertiaryOne hover:bg-tertiaryThree" data-aos="fade-right"
                    >
                      <span>Sign Up</span>
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
                      className="bg-primary backdrop:text-md font-serif font-bold dark:bg-primary relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne hover:text-white rounded-r-full"
                    >
                      <span>Home</span>
                    </a>
                  </div>
                  <div className='p-0'>
                 <Menu as="div" className="relative z-40 inline-block text-left py-3">
                    <div>
                      <Menu.Button className="bg-primary backdrop:text-md font-bold  dark:bg-primary relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne hover:text-white rounded-r-full">
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md bg-primary  divide-y divide-gray-100 focus:outline-none">
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
                    <Menu as="div" className="relative z-30 inline-block text-left py-3">
                    <div>
                      <Menu.Button className="bg-primary text-md font-serif font-bold dark:bg-primary relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne hover:text-white rounded-md">
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
                     <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md bg-primary ring-1 ring-primary ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
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
                    <Menu as="div" className="relative z-20 inline-block text-left py-3">
                    <div>
                      <Menu.Button className="bg-primary backdrop:text-md font-serif font-bold dark:bg-primary relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne hover:text-white rounded-md">
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md bg-primary  divide-y divide-gray-100  hover:bg-tertiaryOne focus:outline-none">
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
                      className="text-md font-bold relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-tertiaryOne  hover:text-white rounded-md"
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