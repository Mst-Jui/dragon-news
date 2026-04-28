"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleLoginFunc = async (data) => {

    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      alert(error.message)
    }
    if (res) {
      alert("Signin successful")
    }

  }

  return (
    <div className='flex justify-center items-center container mx-auto min-h-[80vh] bg-slate-100'>
      <div className='bg-white p-4 rounded-xl'>
        {/* Title */}
        <h2 className='font-bold text-3xl text-center mb-6'>Login your account</h2>
        {/* Form */}
        <form onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
          {/* Email  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", { required: "Email field is required" })} />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
          </fieldset>
          {/* Password  */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword ? "text" : "password"}
              className="input"
              name='password'
              placeholder="Type here password"
              {...register("password", { required: "Password field is required" })} />
            <span
              className='absolute top-4 right-2 cursor-pointer'
              onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </fieldset>
          {/* Button  */}
          <button className='btn w-full bg-slate-800 text-white'>Signin</button>
        </form>
        <p className='mt-4'>
          Dont’t Have An Account ?
          <Link href={"/register"} className='text-blue-500'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

