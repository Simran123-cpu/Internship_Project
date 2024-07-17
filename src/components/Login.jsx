// src/Login.jsx
import React from 'react';
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LoginInfo } from '../Info';

const Login = ({ navigateTo }) => {
    return (
        <div>
            {LoginInfo.map((item, index) => (
                <div key={index} className='p-5 mt-10 mb-5'>
                    <h4 className='text-4xl font-semibold '>{item.title}</h4>
                    <p className='text-gray-400 mb-6'>{item.description}</p>
                    <p className='mb-2'>Email.Address</p>
                    <input className='border-solid rounded-sm border-2 border-gray mb-5'
                        type='email'
                        placeholder='Enter Email'
                    />
                    <p className='mb-2'>Password</p>
                    <div className='relative'>
                        <input
                            className='border-solid rounded-sm border-2 border-gray '
                            type='password'
                            placeholder='Enter Password'
                        />
                        <FaRegEyeSlash
                            className='absolute right-1/3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'
                        />
                    </div>

                    <p className='flex items-end justify-end text-orange-400 mt-4 mb-10'>Forgot Password?</p>
                    <div className='flex justify-center item-center'>
                        <button className='rounded-full text-white pr-16 pl-16 pt-3 pb-3 border-solid bg-orange-400 mb-10'
                            onClick={() => navigateTo('tracking')}>
                            Sign In
                        </button>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex-grow border-t border-gray-600'></div>
                        <p className='mx-4 mb-5'>or Sign In with</p>
                        <div className='flex-grow border-t border-gray-600'></div>
                    </div>
                    <div className="flex justify-center mx-auto items-center w-10 h-10 border-2 border-gray-400 rounded-full p-2 mt-3 mb-8">
                        <FcGoogle className='text-4xl ' />
                    </div>
                    <div className='flex justify-center '>
                        <p className='text-black font-semibold mr-1'>{item.Bottom_heading}</p>
                        <a className='text-orange-400 font-semibold' href='#' onClick={() => navigateTo('register')}>Register</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Login;
