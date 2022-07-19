import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
        <div className='w-full h-screen'>
            <img
            className='hidden sm:block absolute w-full h-screen object-cover'
            src='https://templates.iqonic.design/streamit/frontend/html/images/login/login.jpg'
            alt='/'
            />
            <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-auto mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                <div className='justify-center'>
                    <Link to="/"><img src={logo} className="w-full h-20 object-contain" alt="logo" /></Link>
                    <h1 className='mt-4 mb-4 text-center'>Sign Up to new account</h1>
                </div>
                <form
                    // onSubmit={handleSubmit}
                    className='w-full flex flex-col py-4'
                >
                    <input
                    //   onChange={(e) => setEmail(e.target.value)}
                    className='p-3 my-2 bg-black border focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40'
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    />
                    <input
                    //   onChange={(e) => setPassword(e.target.value)}
                    className='p-3 my-2 bg-black border focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40'
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    />
                    <button className='bg-red-600 py-3 my-2 font-bold'>
                    Sign Up
                    </button>
                    <div className='mt-2 text-xs'>Already have an account? <Link to="/signin">Sign In</Link></div>
                </form>
                </div>
            </div>
            </div>
        </div>
      </>
    )
}

export default Register