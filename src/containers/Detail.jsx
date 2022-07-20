import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiPlay, BiInfoCircle } from 'react-icons/bi'
import Navbar from '../components/Navbar';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const Detail = () => {
    const [movie, setMovie] = useState()
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams()
    
    useEffect(() => {
        const apiUrl = api_url + id +'?api_key='+key;
        const urlImg = api_url + id +'/images?api_key='+key+'&language=en-US&include_image_language=en,null';
        axios.get(apiUrl).then(res => {
            axios.get(urlImg).then(result => {
                let back_url = '';
                if (result.data.backdrops.length > 10) {
                    back_url = result.data.backdrops[10].file_path
                } else {
                    back_url = result.data.backdrops[0].file_path
                }
                console.log(res.data)
                setMovie(
                    {
                        id: res.data.id,
                        backdrop_path: back_url,
                        title: res.data.title,
                        overview: res.data.overview,
                        logo: result.data.logos[0].file_path,
                        tagline: res.data.tagline,
                        data: res.data
                    }
                );
            })
        })
    }, [id])

    return (
        <>
            <div>
                <Navbar />
                <div className='w-full md:h-[600px] bg-black'>
                    <div className='w-full h-full'>
                        {/* <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div> */}
                        <img 
                            className='w-full md:h-[600px] object-cover'
                            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                            alt={movie?.title}
                        />
                        <div className='absolute w-full top-[15%] md:top-[25%] p-2 md:p-8 text-white'>
                            <img src={`https://image.tmdb.org/t/p/original/${movie?.logo}`} alt={movie?.title} className="w-[50%] md:w-[50%] mb-2" />
                            {/* <h1 className="text-sm md:text-3xl mb-3 whitespace-normal">{movie?.title}</h1> */}
                            <p className='w-[50%] text-xs md:text-sm text-gray-300'>{movie?.tagline}</p>
                            <div className='mt-5 flex'>
                                <Link to={'/watch-movie/'+id} ><button className='bg-gray-100 text-black rounded-sm p-1 md:p-2 text-xs mr-3 px-2 md:px-5 flex'><BiPlay size={25} className="mr-3"></BiPlay> <span className='mt-1 text-xs text-bold'>Play</span></button></Link>
                                <button className='text-white border rounded-sm p-1 md:p-2 text-xs md:px-5 flex' onClick={() => setShowModal(true)}><BiInfoCircle size={25}></BiInfoCircle> <span className='mt-1 text-bold ml-3 text-xs'>More Information</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Categories id="1" getUrl="popular" title="Popular" getImage="back" />
                <Categories id="2" getUrl="upcoming" title="Upcoming" getImage="poster" />
                {showModal ? (
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative my-6 max-w-3xl w-[75%] md:w-[100%] text-white">
                        <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5  ">
                            <h3 className="text-xl font=semibold">Overview</h3>
                            <button
                                className="bg-transparent border-0 text-white float-right"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="text-white opacity-7 h-6 w-6 text-xl block py-0">
                                x
                                </span>
                            </button>
                            </div>
                            <div className="relative p-6 flex-auto">
                                <h1 className='font-bold mb-2'>{movie?.title}</h1>
                                <div className='flex flex-wrap md:flex-nowrap'>
                                    <div className='w-full'>
                                        <p className='text-gray-200 text-sm mb-2'>{movie?.overview}</p>
                                    </div>
                                    <div className='w-full ml-10'>
                                        <table className='text-gray-400 text-xs'>
                                            <tr className='pb-4'>
                                                <td>Company: </td>
                                                <td className='pl-2 pt-2'>
                                                    {movie?.data.production_companies.map(item =>
                                                        <span>{item.name}, </span>
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='pt-2'>Genres: </td>
                                                <td className='pl-2 pt-2'>{movie?.data.genres.map(item => 
                                                        <span>{item.name}, </span>
                                                    )}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <Footer />
      </>
    )
}

export default Detail