import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from '../context/auth';
import FullPageLoader from '../component/FullPageLoader';
import Layout from '../component/layout';

export default function admin() {
  const router = useRouter();

  const { isAuthenticated, user, logout, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/');
    }
  }, [isLoading, isAuthenticated]);

  if (isLoading || !isAuthenticated) {
    return (
      <Layout>
        <FullPageLoader />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold underline'>Halo Admin Robertus</h1>
      <a
        href='#'
        className='inline-flex px-5 ml-3 font-medium bg-indigo-600 rounded-md text-white hover:bg-indigo-900'
      >
        Button Click
      </a>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        molestias quibusdam soluta similique totam alias harum, autem itaque,
        omnis a ea quis inventore, sequi ipsam rem non quaerat vel. Tenetur.
      </p>
      <br />
      <Link href='/'>Kembali</Link>
    </Layout>
  );
}
