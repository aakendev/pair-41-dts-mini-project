import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const Watch = () => {
    const [videos, setVideos] = useState()
    const { jenis, id } = useParams()
    
    useEffect(() => {
        const apiUrl = api_url+jenis+'/'+ id +'/videos?api_key='+key;
        axios.get(apiUrl).then(res => {
            setVideos(res.data.results[3])
        })
    }, [jenis, id])
    
    return (
        <>
            <div className='w-full h-full'>
                <iframe 
                    className='w-full h-screen'
                    src={"https://www.youtube.com/embed/"+videos?.key+'?&autoplay=1&loop=1'} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
      </>
    )
}

export default Watch