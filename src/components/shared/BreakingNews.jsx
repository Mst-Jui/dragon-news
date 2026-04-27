import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
  const news = [
    {
      "id": 1,
      "title": "Bangladesh wins cricket series against India"
    },
    {
      "id": 2,
      "title": "New tech park inaugurated in Dhaka"
    },
    {
      "id": 3,
      "title": "Global climate summit 2026 highlights"
    }
  ]
  return (
    <div className='flex justify-between gap-4 py-4 bg-gray-200 container mx-auto px-2'>
      <button className='btn bg-red-500 text-white'>Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        {
          news.map(n => {
            return <span key={n.id}>{n.title}</span>
          })
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;