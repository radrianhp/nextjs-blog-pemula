import axios from 'axios';
import React from 'react';
import Layout from '../../component/layout';
import Image from 'next/image';

interface BlogSpot {
  detailPost: any;
}
export default function DetailPost(props: BlogSpot) {
  const { detailPost } = props;
  console.log(detailPost);

  return (
    <Layout>
      <div className='py-10 space-y-2 rounded-lg md:space-y-5'>
        <div className='flex flex-col space-y-3'>
          <h1 className='text-3xl font-extrabold text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
            {detailPost.text}
          </h1>
          <br />
          <Image
            src={detailPost.image}
            alt='detail-image'
            width={200}
            height={200}
            layout='responsive'
            blurDataURL={detailPost.image}
            placeholder='blur'
          />
          <p className='text-lg leading-7 text-gray-800'>
            {detailPost.publishDate}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const url = 'https://dummyapi.io/data/v1/';

  const config = {
    headers: {
      'app-id': '622047968d52fb8f02833e75'
    }
  };
  try {
    const response = await axios.get(`${url}` + 'post', config);
    const blogPost = response.data;

    const paths = blogPost.data.map((user: any) => ({
      params: {
        id: user.id
      }
    }));
    return { paths, fallback: true };
  } catch (error: any) {
    const blogPost = error.response.data;
    return { props: { blogPost } };
  }
}

interface GetStaticProps {
  params: {
    id: string;
  };
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const url = 'https://dummyapi.io/data/v1/';
  const config = {
    headers: {
      'app-id': '622047968d52fb8f02833e75'
    }
  };

  try {
    const response = await axios.get(`${url}` + `post/${id}`, config);
    const detailPost = response.data;
    return { props: { detailPost } };
  } catch (error: any) {
    const blogPost = error.response.data;
    return { props: { blogPost } };
  }
}
