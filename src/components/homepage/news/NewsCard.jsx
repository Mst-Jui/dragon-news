import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const NewsCard = ({ news }) => {
  // console.log(news)
  return (
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
        <p className='line-clamp-3'>{news.details}</p>
        <div className='flex justify-between items-center gap-2'>
          <div className='flex gap-2 items-center'>
            <h2 className='flex gap-2 items-center'><IoIosStar className='text-lg text-yellow-500' /> {news.rating.number}</h2>
            <h2 className='flex gap-2 items-center'><FaEye /> {news.total_view}</h2>
          </div>
          <Link href={`/news/${news._id}`}>
            <button className='btn'>See Details</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;