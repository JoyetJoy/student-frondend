import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../components/button';
import axiosInstance from '../../instance/axiosInstance';
import loginImage from '../../assets/StudentLogin.png';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/login', data);
      localStorage.setItem('jwt',response.data.token)
      setSuccess('Login Successful');
      setError(null);
      setTimeout(() => {
        setSuccess(null);
        navigate('/user/userhome');
      }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message || 'Login failed. Please try again');
      } else {
        setError('Login failed. Please try again');
      }
      setSuccess(null);
      setTimeout(() => {
        setError(null);
      }, 1000);
    }
  };

  return (
    <>
      <img src={loginImage} className='h-screen w-full' alt='Login background' />
      <div className='w-[20rem] h-[25rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-custom-dark bg-opacity-65 flex items-center justify-center flex-col backdrop-blur-sm'>
        <div className='w-full text-[40px] font-bold text-white flex justify-center mb-8'>Login</div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center flex-col w-[65%]'>
          <input
            className='h-7 w-full mb-1 placeholder-sm pl-3 rounded-sm'
            placeholder='Email'
            type='email'
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: emailRegex,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span className='text-[0.80rem] text-red-500'>{errors.email.message}</span>}
          <input
            className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm'
            placeholder='Password'
            type='password'
            {...register('password', {
              required: 'This field is required',
              pattern: {
                value: passwordRegex,
                message: 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character'
              }
            })}
          />
          {errors.password && <span className='text-[0.80rem] text-red-500'>{errors.password.message}</span>}
          <div className='text-[0.80rem] text-white w-full'>
            Don't have an account? <Link to='/user/signup' className='text-custom-primary font-semibold hover:text-red-300'>Register</Link>
          </div>
          {error && <span className='text-[0.80rem] text-red-500'>{error}</span>}
          {success && <span className='text-green-400 text-[0.80rem]'>{success}</span>}
          <Button type='submit' className='bg-white p-2 rounded-sm mt-4 w-full h-9 font-bold text-black hover:bg-blue-400 flex items-center justify-center' content='Submit' />
        </form>
      </div>
    </>
  );
}

export default Login;
