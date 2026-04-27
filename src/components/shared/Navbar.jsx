"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';



const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  
  return (
    <div className='flex justify-between container mx-auto gap-2'>
      <div></div>
      <ul className='flex justify-between items-center gap-3 text-gray-700'>
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-600"}>Career</NavLink>
        </li>
      </ul>
      {isPending
        ?
        <span className="loading loading-spinner loading-lg"></span>
        :
        user
          ?
          <div className='flex items-center gap-2 mt-6'>
            <h2>Hello, {user.name}</h2>
            <Image
              src={user?.image || userAvatar}
              width={60}
              height={60}
              alt='User avatar'
              className='rounded-full' />
            <button
            onClick={async()=>await authClient.signOut()}
            className='btn bg-purple-500 text-white'>Logout</button>
          </div>
          :
          <button className='btn bg-purple-500 text-white'>
            <Link href={"/login"}>Sign In</Link>
          </button>
      }
    </div>
  );
};

export default Navbar;