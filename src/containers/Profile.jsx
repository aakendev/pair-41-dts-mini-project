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
                <h1 className='text-5xl'>Who's Watching?</h1>
                    <Link to="/signin">
                        <div className='flex flex-nowrap w-full items-center justify-center' style={{padding: '2rem 10rem'}}>
                            {requestProfile.map((item,index) => 
                                <img src={item} className="w-[15%] object-contain mr-5" alt="" key={index} />
                            )}
                            <button className='border rounded-full px-10 py-8 border-gray-600 bg-gray-600 mt-2'>
                                <p className='text-4xl text-black'>+</p>
                            </button>
                    {/* <div className='border rounded-full border-gray-600 bg-gray-600 mr-5 cursor-pointer'>
                    </div> */}
                        </div>
                    </Link>
                <button className='border border-gray-600 p-2 px-5 text-gray-600'>MANAGE PROFILE</button>
            </div>
        </div>
      </>
    )
}

export default Profile