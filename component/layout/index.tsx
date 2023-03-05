import { ReactNode } from 'react';
import Navbar from '../navbar';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <>
      <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-3xl xl:px-0'>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <div className='divide-gray-200 dar:divide-gray-700'>{children}</div>
        </div>
      </div>
    </>
  );
}
