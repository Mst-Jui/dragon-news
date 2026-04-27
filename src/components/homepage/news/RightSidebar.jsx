"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github"
    })
    console.log("data", data);
    
  }


  return (
    <div>
      <h2 className='font-bold text-lg mb-4'>Login With</h2>
      <div className='flex flex-col gap-2'>
        <button
          onClick={handleGoogleSignin}
          className='btn border-blue-500 text-blue-500'><FaGoogle />
          Login with google
        </button>
        <button 
        onClick={handleGitHubSignin}
        className='btn'><FaGithub /> Login with github</button>
      </div>
    </div>
  );
};

export default RightSidebar;