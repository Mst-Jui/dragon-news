import { getNewsDetailsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

export const generateMetadata = async({params}) => {
  const {id} = await params;
  const news = await getNewsDetailsId(id);
   return {
    title: news.title,
    description: news.details,
  }
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params
  // console.log("params", id)
  const news = await getNewsDetailsId(id);
  // console.log("news", news)

  return (
    <div className='mx-auto max-w-4xl my-8'>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          {/* Author info  */}
          <div className='flex justify-between items-center bg-slate-200 p-4'>
            <div className='flex items-center gap-1'>
              <Image
                src={news.author?.img}
                width={40}
                height={40}
                alt={news.author?.name}
                className='rounded-full'
              ></Image>
              <div>
                <h2 className='font-semibold'>{news.author?.name}</h2>
                <p className='text-xs'>{news.author?.published_date}</p>
              </div>
            </div>
            <div className='flex justify-between items-center gap-2'>
              <CiShare2 className='text-xl' />
              <CiBookmark className='text-xl' />
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              width={300}
              height={300}
              className='w-full'
              alt={news.title} />
          </figure>
          <p className=''>{news.details}</p>
          <div className='flex justify-between items-center gap-2'>
            <div className='flex gap-2 items-center'>
              <h2 className='flex gap-2 items-center'><IoIosStar className='text-lg text-yellow-500' /> {news.rating.number}</h2>
              <h2 className='flex gap-2 items-center'><FaEye /> {news.total_view}</h2>
            </div>
            <Link href={`/category/${news.category_id}`}>
              <button className='btn bg-purple-500 text-white'>See other news for this category <BsArrowRight /> </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsDetailsPage;