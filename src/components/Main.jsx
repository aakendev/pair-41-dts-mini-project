import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({movie}) => {

    return (
        <>
            <div className='w-full h-[500px] bg-black'>
                <div className='w-full h-full'>
                    {/* <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div> */}
                    <div id="slider0" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {movie.map((item, index) => (
                            <div className='w-screen inline-block cursor-pointer relative' key={index}>
                                <Link to={`/detail-movie/${item.id}`}>
                                    <div className='flex flex-shrink'>
                                        <div className='w-full items-center text-white p-10 ml-5 mt-[5rem] z-10'>
                                            <h1 className="text-3xl mb-3 whitespace-normal">{item?.title}</h1>
                                            <p className="text-gray-400 mb-2 text-sm">{item?.tagline}</p>
                                            <p className='whitespace-normal'>{item?.overview}</p>
                                        </div>
                                        <div className='w-full'>
                                            <img 
                                                className='w-full h-[500px]'
                                                src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
                                                alt={item?.title}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </>
    )
}

export default Main