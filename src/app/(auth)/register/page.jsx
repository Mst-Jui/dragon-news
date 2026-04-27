"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {

    // console.log(data);
    const { name, photo, email, password } = data;
    // console.log(name, photo);

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/login",
    });
    // console.log({res, error});
    if (error) {
      alert(error.message)
    }
    if (res) {
      alert("Signup successful")
    }


  };
  // console.log("errors", errors);

  // console.log(e.target.value);

  return (
    <div className='flex justify-center items-center container mx-auto min-h-[80vh] bg-slate-100'>
      <div className='bg-white p-4 rounded-xl'>
        {/* Title */}
        <h2 className='font-bold text-3xl text-center mb-6'>Register your account</h2>
        {/* Form */}
        <form onSubmit={handleSubmit(handleRegisterFunc)} className='space-y-4'>
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name", { required: "Name field is required" })} />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
          </fieldset>

          {/* Photo URL  */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here Photo URL"
              {...register("photo", { required: "Photo URL field is required" })} />
            {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
          </fieldset>

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
              className='absolute top-4 right-8 cursor-pointer'
              onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </fieldset>


          {/* Button  */}
          <button className='btn w-full bg-slate-800 text-white'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

