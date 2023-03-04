import Link from 'next/link';
import axios from 'axios';
import Layout from '../component/layout';
import Navbar from '../component/navbar';

interface Blog {
  id: number;
  text: string;
  publishDate: string;
}

const Home = (props: any) => {
  const { blogPost } = props;

  return (
    <>
      <Layout>
        <Navbar />

        <div className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-3l xl:px:0'>
          <div className='flex flex-col justify-between h-screen'>
            <div className='divide-gray-200'>
              <div className='py-10 space-y-2 rounded-lg md:space-y-5'>
                <div className='flex flex-col space-y-3'>
                  <h1 className='text-3xl font-extrabold text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
                    Selamat Datang di blog Saya
                  </h1>
                  <p className='text-lg leading-7 text-gray-800'>
                    halo selamat datang di blog saya, berisi seputar info
                    menarik.
                  </p>
                </div>
              </div>

              <h1 className='text-2xl font-extrabold text-gray-900 leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14'>
                Blog Post
              </h1>
              <ul className='divide-gray-200'>
                <li className='py-2'>
                  {blogPost.data.map((blog: Blog) => {
                    return (
                      <article
                        key={blog.id}
                        className='mb-3 px-3 space-y-2 xl:grid-cols-4 xl:space-y-0 xl:items-baseline bg-gray-200'
                      >
                        <h3 className='text-2xl font-bold leading-8 tracking-tight px-3'>
                          <Link href={`/detail/${blog.id}`}>{blog.text}</Link>
                        </h3>
                        <div className='text-gray-500 max-w-none px-3'>
                          {blog.publishDate}
                        </div>
                      </article>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const url = 'https://dummyapi.io/data/v1/';

  const config = {
    headers: {
      'app-id': '622047968d52fb8f02833e75'
    }
  };

  try {
    const response = await axios.get(`${url}` + 'post', config);
    const blogPost = response.data;
    return {
      props: {
        blogPost
      }
    };
  } catch (error: any) {
    const blogPost = error.response.data;
    return {
      props: {
        blogPost
      }
    };
  }
}

export default Home;
