import React from 'react';
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignIn } from '../Info';

const Register = () => {
    return (
        <div className=''>
            {
                SignIn.map((item, index) => (
                    <div key={index} className='p-4 mt-5 mb-5'>
                        <h4 className='text-4xl font-semibold'>{item.title}</h4>
                        <p className='text-gray-400 mb-4'>{item.description}</p>
                        <p className='mb-2 '>Email.Address</p>
                        <input className='border-solid border-2 rounded-lg border-gray mb-5 w-80 h-10 p-4'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <p className='mb-2 '>Username</p>
                        <input className='border-solid border-2 rounded-lg border-gray mb-5 w-80 h-10 p-4'
                            type='text'
                            placeholder='Enter Username'
                        />
                        <p className='mb-2'>Password</p>
                        <div className='relative  '>
                            <input className='border-solid border-2 border-gray mb-5 w-80 h-10 p-4 rounded-lg'
                                type='number'
                                placeholder='Enter Password'

                            />
                            <FaRegEyeSlash className='absolute right-3 top-1/2 transform -translate-y-5 cursor-pointer text-gray-500' />
                        </div>

                        <div className='flex justify-center '>
                            <p className='text-black font-semibold mr-1 mb-4'>{item.Bottom_heading}</p>

                        </div>
                        <div className='flex justify-center item-center'><button className=' rounded-full text-white pr-16 pl-16 pt-3 pb-3 border-solid bg-orange-400 mb-5 w-72'>Register</button></div>

                        <div className='flex items-center justify-center'>
                            <div className='flex-grow border-t border-gray-600'></div>
                            <p className='mx-4 mb-5'>or Sign In with</p>
                            <div className='flex-grow border-t border-gray-600'></div>
                        </div>
                        <div className="flex justify-center mx-auto border-2 border-gray-400 rounded-full  h-10 w-10 mb-5">
                            <FcGoogle className='text-4xl  ' />
                        </div>
                        <div className='flex justify-center '>
                            <p className='text-black font-semibold mr-1'>{item.Bottom_subheading}</p>
                            <a className='text-orange-400 font-semibold' onClick={() => navigateTo('tracking')}> SignIn</a>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Register;
