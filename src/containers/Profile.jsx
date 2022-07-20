import React from 'react';
import logo from '../assets/images/logo.png'
import requestProfile from '../assets/js/getProfile';
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
    <>
        <div className='flex items-center justify-between p-4 pl-10 z-{100} w-full absolute'>
            <Link to="/"><img src={logo} className="w-10 " alt="logo" /></Link>
        </div>
        <div className='w-full h-screen pt-20 p-5'>
            <div className='text-center text-white mt-20'>
                <h1 className='text-2xl md:text-5xl'>Who's Watching?</h1>
                    <Link to="/signin">
                        <div className='flex flex-wrap md:flex-nowrap w-full items-center justify-center'>
                            {requestProfile.map((item,index) => 
                                <img src={item} className="w-[50%] md:w-[15%] object-contain pr-2 md:mr-5 mt-5" alt="" key={index} />
                            )}
                            <button className='border rounded-full px-5 py-3 md:px-10 md:py-8 border-gray-600 bg-gray-600 mt-5'>
                                <p className='text-2xl md:text-4xl text-black'>+</p>
                            </button>
                        </div>
                    </Link>
                <button className='border border-gray-600 p-2 px-5 text-gray-600 mt-5'>MANAGE PROFILE</button>
            </div>
        </div>
      </>
    )
}

export default Profile