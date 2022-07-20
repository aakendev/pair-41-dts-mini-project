import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const Categories = ({id, getUrl, title, getImage}) => {
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        const getAPI = () => {
            const apiUrl = api_url+getUrl+'?api_key='+key
            axios.get(apiUrl).then(response => {
                setMovies(response.data.results)
            })
        }
        getAPI()
    }, [getUrl])

    const slideLeft = () => {
        const slider = document.getElementById('slider'+id)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider'+id);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h1 className='text-white p-5 md:pl-10 pt-5 text-xl mb-3'>{title}</h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"+id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, index) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={index}>
                            <Link to={`/detail-movie/${item?.id}`}>
                                {getImage === 'back' ? (
                                    <img
                                        className='w-full h-auto block'
                                        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                                        alt={item?.title}
                                    />
                                ) : (
                                    <img
                                        className='w-full h-auto block'
                                        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                                        alt={item?.title}
                                    />
                                )}
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                    <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>
                                    {item?.title}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={40}
                />
            </div>
      </>
    )
}

export default Categories