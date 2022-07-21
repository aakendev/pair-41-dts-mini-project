import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Categories from '../components/Categories';
import TopRated from '../components/TopRated';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const Movies = () => {
    const [main, setMain] = useState([]);

    const getMovieById = (data) => {
        const all_data = [];
        data.forEach(item => {
            const apiUrl = api_url + 'movie/' + + item.id +'?api_key='+key;
            const urlImg = api_url + 'movie/' + + item.id +'/images?api_key='+key+'&language=en-US&include_image_language=en,null';
            axios.get(apiUrl).then(res => {
                axios.get(urlImg).then(result => {
                    all_data.push({
                        backdrop_path: res.data.backdrop_path,
                        genres: res.data.genres[0],
                        title: res.data.title,
                        tagline: res.data.tagline,
                        overview: res.data.overview,
                        id: res.data.id,
                        logo: result.data.logos[0].file_path
                    })
                    setMain(all_data.slice(0,5))
                })
            })  
        })
    }

    
    useEffect(() => {
        const getAPI = () => {
            const apiUrl = api_url+'movie/popular?api_key='+key
            axios.get(apiUrl).then(response => {
                getMovieById(response.data.results.slice(0,5));
            })
        }
        getAPI()
    }, [])

    return (
        <>
            <Navbar />
            <Main movie={main} />
            <Categories id="1" getUrl="popular" title="Popular" getImage="back" type="movie" />
            <Categories id="2" getUrl="upcoming" title="Up Coming" getImage="poster" type="movie" />
            <TopRated id="3" getUrl="top_rated" title="Top Rated" type="movie" />
            <Footer />
      </>
    )
}

export default Movies;