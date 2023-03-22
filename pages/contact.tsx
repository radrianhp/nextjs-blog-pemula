import React from 'react';
import { useAuth } from '../context/auth';
import Link from 'next/link';

export default function contact() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-3l xl:px:0'>
          <div className='flex flex-col justify-between h-screen'>
            <div className='divide-gray-200'>
              <div className='py-10 space-y-2 rounded-lg md:space-y-5'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-3xl font-extrabold text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                    Isi halaman kontak
                  </h1>
                </div>
              </div>

              <h1 className='text-2xl font-extrabold text-gray-900 leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14'>
                Detail Kontak
              </h1>
              <p className='text-lg leading-7 text-gray-800'>
                Website untuk blog post
              </p>
              <br />
              <Link href='/'>Kembali</Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-3l xl:px:0'>
            <div className='flex flex-col justify-between h-screen'>
              <div className='divide-gray-200'>
                <div className='py-10 space-y-2 rounded-lg md:space-y-5'>
                  <div className='flex flex-col space-y-3'>
                    <h1 className='text-3xl font-extrabold text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                      Isi halaman kontak
                    </h1>
                    <p className='text-lg leading-7 text-gray-800'>
                      harus login terlebih dahulu
                    </p>
                  </div>
                </div>
                <br />
                <Link href='/'>Kembali</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
