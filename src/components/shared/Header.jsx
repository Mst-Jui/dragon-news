import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { compareAsc, format } from "date-fns";

const Header = () => {
  return (
    <div className='text-center py-8 space-y-2'>
      <Image
        src={logo}
        width={300}
        height={200}
        alt='logo'
        className='mx-auto' />
      <p>Journalism Without Fear or Favour</p>
      {/* <p>
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p> */}
      <p>
        {format(new Date(), "EEEE, MMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;