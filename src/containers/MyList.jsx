import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyList = () => {
    return (
        <>
            <Navbar />
            <div className='text-white p-5 md:pl-10 pt-5 text-xl mb-3'>
                <h1>My List</h1>
            </div>
            <Footer />
      </>
    )
}

export default MyList;