'use client'

import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  {name: 'Home', href:'/', current: false },
  {name: 'About Us', href:'/about', current: false },
  {name: 'Service Agreement', href:'/agreement', current: false },
  
]


const mobilenavigation = [
  {name: 'Home', href:'/', current: false },
  {name: 'About Us', href:'/about', current: false },
  {name: 'Service Agreement', href:'/agreement', current: false },
  {name: 'Schedule an Appointment', href:'/appointment', current: false},
  
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar () {
  return (
    <Disclosure as="nav" className="bg-white backdrop-blur-md sticky top-0 bg-opacity-8 z-30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border border-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
             <Link href='/'><div className="flex flex-shrink-0 items-center">
            
              <img
                alt="Your Company"
                src='./photos/logo.jpeg'
                className="h-8 md:h-14 w-auto"
              />
            </div> 
            </Link>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-rose-900 hover:text-white',
                      'rounded-2xl px-3 py-2 text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

          </div>


          <div className="hidden absolute inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href='/appointment'>
            <button
              type="button"
              className="relative rounded-xl bg-gray-800 p-2  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Schedule an Appointment</span>
              <p className='text-xl'>Schedule an Appointment</p>
            </button>
            </Link>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {mobilenavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
              
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

