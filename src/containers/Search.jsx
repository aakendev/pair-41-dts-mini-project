import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const api_url = process.env.REACT_APP_API_IMDB
const key = process.env.REACT_APP_KEY_IMDB
const url_img = 'https://image.tmdb.org/t/p/original/'

const Search = () => {
    const { value } = useParams();
    const navigate = useNavigate();
    const [list, setList] = useState([])

    const handleClick = (id) => {
        navigate('/detail/movie/'+id)
    }
    
    useEffect(() => {
        const getData = async () => {
            const url = api_url +'search/movie?api_key='+key+'&query='+value
            axios.get(url).then(res => {
                setList(res.data.results)
            })
        }

        getData()
    }, [value])

    return (
        <>
            <Navbar />
            <div className='p-4 md:ml-7 text-white'>
                <h1>Search for {value} </h1>
                {list.length > 0 ? (
                    <div className='flex flex-wrap items-center justify-between'>
                        {list.map(item => 
                            <>
                                {item.poster_path !== null ? (
                                    <img src={url_img + item.poster_path} className="w-[10%] mr-3 mt-3" alt="" onClick={() => handleClick(item.id)} />
                                ) : (
                                    <img src="https://i.pinimg.com/564x/53/6c/63/536c6323d439596e766f055498e775e4.jpg" alt="" className='w-[10%] mr-3 mt-3' />
                                )}
                            </>
                        )}
                    </div>    
                ) : (
                    <div className='mt-4'>No Data Result!</div>
                )}
            </div>
            <Footer />
      </>
    )
}

export default Search;