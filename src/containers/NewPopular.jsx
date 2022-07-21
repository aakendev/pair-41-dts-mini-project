import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

const NewPopular = () => {
    return (
        <>
            <Navbar />
            <Categories id="1" getUrl="now_playing" title="Now Playing" getImage="back" type="movie" />
            <Categories id="1" getUrl="on_the_air" title="On Going" getImage="back" type="tv" />
            <Footer />
      </>
    )
}

export default NewPopular;