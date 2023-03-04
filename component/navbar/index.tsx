import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='py-5 md:py-10 sticky top-0 z-40 bg-white '>
      <div className='flex items-center justify-between max-w-4xl mx-auto '>
        <div className='flex items-center text-base leading-10'>
          <div className='hidden sm:block'>
            <Link href='/'>
              <a className='p-1 hover:bg-gray-300 hover:bg-opacity-20 hover:rounded-lg font-medium text-gray-900 sm:p-4'>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='p-1 hover:bg-gray-300 hover:bg-opacity-20 hover:rounded-lg font-medium text-gray-900 sm:p-4'>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
