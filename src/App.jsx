import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Categories from './components/Categories';
import TopRated from './components/TopRated';

const api_url = process.env.REACT_APP_API_IMDB;
const key = process.env.REACT_APP_KEY_IMDB;

const App = () => {
    const [main, setMain] = useState([]);

    const getMovieById = (data) => {
        const all_data = [];
        data.forEach(item => {
            const apiUrl = api_url + item.id +'?api_key='+key;
            axios.get(apiUrl).then(res => {
                all_data.push({
                    backdrop_path: res.data.backdrop_path,
                    genres: res.data.genres[0],
                    title: res.data.title,
                    tagline: res.data.tagline,
                    overview: res.data.overview,
                    id: res.data.id
                })
                setMain(all_data.slice(0,5))
            })  
        })
    }

    
    useEffect(() => {
        const getAPI = () => {
            const apiUrl = api_url+'popular?api_key='+key
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
            <Categories id="1" getUrl="popular" title="Popular" getImage="back" />
            <Categories id="2" getUrl="upcoming" title="Upcoming" getImage="poster" />
            <TopRated id="3" getUrl="top_rated" title="Top Rated" />
            <Footer />
      </>
    )
}

export default App;