import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import requestImage from '../assets/js/getImage';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const TopRated = ({id, getUrl, title, type}) => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const getAPI = () => {
            const apiUrl = api_url+type+'/'+ getUrl +'?api_key='+key
            axios.get(apiUrl).then(response => {
                setMovies(response.data.results.slice(0, 10))
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
            <h1 className='text-white pl-10 pt-5 text-xl mb-3'>{title}</h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                    onClick={slideLeft}
                    className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
                    size={40}
                />
                <div id={"slider"+id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, index) => (
                        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={index}>
                            <Link to={`/detail/${type}/${item?.id}`}>
                                <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' key={index}>
                                    <div className='flex'>
                                        <img src={requestImage[index]}
                                            className="ml-5 w-[40%] md:w-[30%] mt-2 md:mt-0 h-[5rem] md:h-[10rem]" 
                                            alt={requestImage[index]}
                                        />
                                        <img
                                            className='absolute h-[5rem] mt-2 md:mt-0 pl-[5rem] md:pl-[6rem] md:h-[10rem]'
                                            src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                                            alt={item?.title}
                                        />

                                    </div>
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

export default TopRated