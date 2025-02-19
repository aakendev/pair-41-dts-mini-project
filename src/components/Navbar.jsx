import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { BiSearch, BiGift, BiBell, BiMenu } from 'react-icons/bi';
import { Icon } from '@iconify-icon/react';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === "Enter") {
        navigate('/search/'+value)
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const onLogout = () => {
    signOut(auth).then(() => {
      navigate('/signin');
    }).catch((error) => {
      console.log(error)
    });
  }
  
  return (
        <>
            <nav className='bg-black text-white'>
                <div className='flex items-center font-medium justify-arround'>
                    <div className="z-50 p-5 w-full flex justify-between">
                        <img src={logo} alt="logo" className='h-10 md:ml-5 md:cursor-pointer' />
                        <div className="text-3xl md:hidden float-left" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <BiMenu className='mt-1'></BiMenu>
                        </div>
                        <ul className="md:flex hidden uppercase items-center gap-8 text-sm">
                            <li>
                                <Link to="/" className='px-3 inline-block hover:text-gray-600'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/tv-series" className='px-3 inline-block hover:text-gray-600'>
                                    Series
                                </Link>
                            </li>
                            <li>
                                <Link to="/movies" className='px-3 inline-block hover:text-gray-600'>
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link to="/new-and-popular" className='px-3 inline-block hover:text-gray-600'>
                                    New and Popular
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-list" className='px-3 inline-block hover:text-gray-600'>
                                    My List
                                </Link>
                            </li>
                        </ul>
                        <div>
                            {user !== null ? (
                                <div className='flex text-right'>
                                    {search ? (
                                        <input type="text" name="search" className='mr-1 md:mr-3 my-2 w-14 md:w-40 rounded-sm bg-white text-gray-600 text-xs md:text-sm p-1 md:pl-2' placeholder='Search Movies' onChange={(e) => handleChange(e)} onKeyPress={(e) => handleKey(e)} />
                                    ) : null}
                                    <BiSearch className='mt-3 mr-3 hover:text-gray-600 cursor-pointer' onClick={() => setSearch(!search)}></BiSearch>
                                    <p className='text-xs md:text-sm mr-3 mt-3 md:mt-2'>{user?.email}</p>
                                    <BiGift className='mt-3 mr-3 hover:text-gray-600 cursor-pointer'></BiGift>
                                    <BiBell className='mt-3 mr-3 hover:text-gray-600 cursor-pointer'></BiBell>
                    <               Icon icon='ic:round-logout' className='text-xl mt-3 cursor-pointer text-center block hover:text-gray-600' onClick={onLogout} />
                                </div>
                            ) : (
                                <div className='flex text-right'>
                                    <Link to="/signin"><button className='p-2 mr-3 hover:text-gray-600'>Sign In</button></Link>
                                    <Link to="/signup"><button className='border border-red-600 bg-red-600 p-2 hover:text-gray-600'>Sign Up</button></Link>
                                </div>
                            ) }
                        </div>
                    </div>
                    
                    {/* Mobile nav */}
                    <ul
                        className={`
                        md:hidden bg-black fixed w-[50%] h-[10rem] top-20 overflow-y-auto bottom-0 py-3 pl-4 z-10
                        duration-500 ${navbarOpen ? "left-0" : "left-[-100%]"}
                        `}
                        >
                        <li>
                            <Link to="/" className="px-3 inline-block hover:text-gray-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv-series" className="px-3 inline-block hover:text-gray-600">
                                Series
                            </Link>
                        </li>
                        <li>
                            <Link to="/movies" className="px-3 inline-block hover:text-gray-600">
                                Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/new-and-popular" className="px-3 inline-block hover:text-gray-600">
                                New and Popular
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-list" className="px-3 inline-block hover:text-gray-600">
                                My List
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
      </>
    )
}

export default Navbar