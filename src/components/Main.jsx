import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({movie, type}) => {
    return (
        <>
            <div className='w-full'>
                <div className='w-full h-full'>
                    {/* <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div> */}
                    <div id="slider0" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                        {movie.map((item, index) => (
                            <div className='w-screen inline-block cursor-pointer relative' key={index}>
                                <Link to={`/detail/${type}/${item.id}`}>
                                    <div className='w-full relative'>
                                        <div className='w-full absolute md:w-[50%] items-center text-white p-5 md:p-10 md:ml-5 md:mt-[1rem]'>
                                            {item?.logo !== undefined ? (
                                                <img src={`https://image.tmdb.org/t/p/original/${item?.logo}`} alt={item?.title} className="w-[50%] md:w-[70%] mb-2" />
                                            ) : (
                                                <h1 className="text-sm md:text-3xl mb-3 whitespace-normal">{item?.title}</h1>
                                            )}
                                            <p className="text-gray-400 mb-2 text-xs md:text-md">{item?.tagline}</p>
                                            <p className='whitespace-normal text-xs md:text-lg'>{item?.overview.substring(0,250)}</p>
                                        </div>
                                        <div className='w-full  md:w-[50%] float-right'>
                                            <img 
                                                className='w-full md:h-full'
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