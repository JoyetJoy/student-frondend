import React, { useState } from 'react'
import signupImage from '../../assets/StudentSignup.png'
import { Link ,useNavigate} from 'react-router-dom';
import Button from '../../components/button';
import axiosInstance from '../../instance/axiosInstance';


function Signup() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate=useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = inputs 
    console.log(inputs);
    const emptyFields=Object.values(inputs).some((value)=>value==='')

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password regex validation (at least 8 characters, at least one uppercase letter, one lowercase letter, and one number)
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(emptyFields){
      setError('Please fill all the fields')
      setTimeout(()=>{
        setError(null)
      },2000)
      return;
    }else if(!emailRegex.test(inputs.email)){
      setError('Enter a valid email address')
      setTimeout(()=>{
        setError(null)
      },2000)
      return;
    }else if(!passwordRegex.test(inputs.password)){
      setError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number")
      setTimeout(()=>{
        setError(null)
      },2000)
      return;
    }else if(inputs.password!==inputs.confirmpassword){
      setError('Password do not match')
      setTimeout(()=>{
        setError(null)
      },2000)
      return;
    }else{
      try{
        const response = await axiosInstance.post('/signup', user);
        setSuccess('Registration Successful');
        setTimeout(() => {
          setSuccess(null);
          navigate('/user/login');
        }, 2000);
      }catch(error){
        if(error.response&&error.response.status===400){
          setError(error.response.data.message||'Registration failed. Please try again')
        }else{
          setError('Registration failed. Please try again');
        }
        setTimeout(() => {
          setError(null);
        }, 2000);
          
      }
      
    }
  }

  return (
    <>
      <img src={signupImage} className='h-screen w-full' alt='Login background' />
      <div className='w-[22rem] h-[31rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-sm bg-custom-dark bg-opacity-65 flex items-center justify-center flex-col'>
        <div className='w-full text-[40px] font-bold text-white flex justify-center mb-8 '>Signup</div>
        <form className='flex items-center justify-center flex-col w-[65%]' onSubmit={handleSubmit}>
          <input className='h-7 w-full mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Username' type='text' name='username' value={inputs.username} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Email' type='email' name='email' value={inputs.email} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Phone Number' type='number' name='phonenumber' value={inputs.phonenumber} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Password' type='password' name='password' value={inputs.password} onChange={handleChange} />
          <input className='h-7 w-full mt-5 mb-1 placeholder-sm pl-3 rounded-sm' placeholder='Confirm Password' type='password' name='confirmpassword' value={inputs.confirmpassword} onChange={handleChange} />
          {error? <span className='text-red-500 text-[0.80rem]'>{error}</span>:<span className='text-green-400 text-[0.80rem]'>{success}</span>}
          <div className='text-[0.80rem] text-white w-full'>Already have an account? <Link to='/user/login' className='text-custom-primary font-semibold hover:text-red-300'>Login</Link></div>
          <Button type='submit' className='bg-white p-2 rounded-sm mt-4 w-full h-9 font-bold text-black  hover:bg-blue-400 flex items-center justify-center' content='Submit' />
        </form>
      </div>
    </>
  );
}

export default Signup;