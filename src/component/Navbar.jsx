import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { /*BiSearch, BiGift, BiBell,*/ BiMenu } from 'react-icons/bi'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between p-4 pl-10 z-{100} w-full sticky text-white'>
                <img src={logo} alt="" className='w-10'></img>
                <button
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <BiMenu className="ml-3"></BiMenu>
                </button>
                <div
                    className={
                    "lg:flex flex-grow items-center w-[80%]" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className={'flex flex-col lg:flex-row list-none lg:ml-auto flex-wrap '+(navbarOpen === true ? 'top-20 left-0 absolute bg-gray-600': 'mt-0 w-full')}>
                        <li className='nav-item'>
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2">Home</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2">Series</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2">Movies</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2">New and Popular</span>
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span className="ml-2">My List</span>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className='flex text-right'>
                    <Link to="/profile-selection"><button className='p-2 mr-3'>Sign In</button></Link>
                    <Link to="/signup"><button className='border border-red-600 bg-red-600 p-2'>Sign Up</button></Link>
                    {/* AFTER LOGIN */}
                    {/* <BiSearch className='mt-1 mr-3'></BiSearch>
                    <p className='text-md mr-3'>Mini</p>
                    <BiGift className='mt-1 mr-3'></BiGift>
                    <BiBell className='mt-1 mr-3'></BiBell> */}
                </div>
            </div>
      </>
    )
}

export default Navbar