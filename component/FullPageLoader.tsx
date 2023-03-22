import { ImSpinner5 } from 'react-icons/im';

export default function FullPageLoader() {
  return (
    <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-3l xl:px:0'>
      <div className='flex flex-col justify-between h-screen'>
        <div className='divide-gray-200'>
          <div className='py-10 space-y-2 rounded-lg md:space-y-5'>
            <div className='flex flex-col space-y-3'>
              <div className='flex flex-col items-center justify-center min-h-screen text-gray-800'>
                <ImSpinner5 className='mb-4 text-6xl animate-spin' />
                <p>Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
