import React, { useState } from 'react'
import loginImage from '../assets/StudentLogin.png'
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Button from '../components/button'


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <>
      <img src={loginImage} className='h-screen w-full' alt='Login background' />
      <div className='w-[20rem] h-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-custom-dark bg-opacity-65 flex items-center justify-center flex-col backdrop-blur-sm'>
        <div className='w-full text-[40px] font-bold text-white flex justify-center mb-8'>Login</div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col w-[65%]'>
          <input className='h-7 w-full mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Username' type='text' {...register('username', { required: true })} />
          {errors.username && <span className='text-[0.80rem] text-red-500  float-start'>This field is required</span>}
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Password' type='password' {...register('password', { required: true })} />
          {errors.password && <span className=' text-[0.80rem] text-red-500'>This field is required</span>}
          {errors.role && <span className='text-red-500 text-[0.80rem]'>This field is required</span>}
          <div className='text-[0.80rem] text-white w-full'>Don't have an account ? <Link to='/signup' className='text-custom-primary font-semibold hover:text-red-300'>Register</Link></div>
          <Button type='submit' className='bg-white p-2 rounded-sm mt-4 w-full h-9 font-bold text-black hover:bg-blue-400 flex items-center justify-center'  content='Submit'/>
        </form>
      </div>
    </>
  );
}

export default Login;