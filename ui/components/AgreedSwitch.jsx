/* eslint-disable no-undef */
// @ts-nocheck
import { Switch } from '@headlessui/react';
import React from 'react';

export const AgreedSwitch = () => (
    <>
  <div className="mt-4 sm:col-span-2">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Switch
                     type="boolean"
                    id="agreed"
                    value={agreed}
                    onClick={() => setAgreed((Agreed) => !Agreed)}
                    className={classNames(
                      agreed ? 'bg-sky-600' : 'bg-gray-600',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200',
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        !agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 rounded-full bg-sky-50 shadow transform ring-0 transition ease-in-out duration-200',
                      )}
                    />
                  </Switch>
                </div>
                <div className="ml-3">
                  <p className="text-base text-gray-50 dark:text-gray-300">
                    By selecting this, you agree to the{' '}
                    <a href="privacy" className="font-medium text-gray-50 underline hover:underline decoration-3 decoration-pink-500 underline-offset-8 dark:text-gray-300">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="cookie" className="font-medium text-gray-50 underline hover:underline decoration-3 decoration-pink-500 underline-offset-8 dark:text-gray-300">
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
  </div>

    </>
);
