import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiPlay, BiInfoCircle } from 'react-icons/bi'
import Navbar from './Navbar';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import Categories from './Categories';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const Detail = (props) => {
    const [movie, setMovie] = useState()
    const { id } = useParams()
    
    useEffect(() => {
        const apiUrl = api_url + id +'?api_key='+key;
        axios.get(apiUrl).then(res => {
            setMovie(res.data);
            
        })
    }, [id])

    return (
        <>
            <div>
                <Navbar />
                <div className='w-full h-[500px] bg-black'>
                    <div className='w-full h-full'>
                        <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div>
                        <img 
                            className='w-full h-[500px] object-cover'
                            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                            alt={movie?.title}
                        />
                        <div className='absolute w-full top-[25%] p-4 md:p-8 text-white'>
                            <h1 className="text-3xl mb-3 whitespace-normal">{movie?.title}</h1>
                            <p className='w-[50%]'>{movie?.overview}</p>
                            <div className='mt-5 flex'>
                                <Link to={'/watch-movie/'+id} ><button className='bg-gray-100 text-black rounded-sm p-2 text-xs mr-3 px-5 flex'><BiPlay size={25} className="mr-3"></BiPlay> <span className='mt-1 text-bold'>Play</span></button></Link>
                                <button className='text-white border rounded-sm p-2 text-xs px-5 flex'><BiInfoCircle size={25}></BiInfoCircle> <span className='mt-1 text-bold ml-3'>More Information</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Categories id="1" getUrl="popular" title="Popular" getImage="back" />
                <Categories id="2" getUrl="upcoming" title="Upcoming" getImage="poster" />
            </div>
            <Footer />
      </>
    )
}

export default Detail