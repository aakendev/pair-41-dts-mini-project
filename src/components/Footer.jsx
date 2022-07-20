import React from 'react';

const Footer = () => {
    return (
        <div className='w-full aligns-item justify-between text-gray-300 '>
            <ul className='text-xs p-5 flex flex-wrap w-full aligns-center justify-between'>
                <li className='ml-5 mt-3'>
                    <p className='mb-1'>Audio and Subtitles</p>
                    <p className='mb-1'>Media Center</p>
                    <p className='mb-1'>Security</p>
                    <p className='mb-1'>Contact Us</p>
                    <button className='border border-gray-300 px-2 py-2 mt-2'>Service Code</button>
                </li>
                <li className='ml-5 mt-3'>
                    <p className='mb-1'>Audio Description</p>
                    <p className='mb-1'>Investor Relations</p>
                    <p className='mb-1'>Legal Providers</p>
                </li>
                <li className='ml-5 mt-3'>
                    <p className="mb-1">Help Center</p>
                    <p className='mb-1'>Jobs</p>
                    <p className='mb-1'>Cookies Preference</p>
                </li>
                <li className='ml-5 mt-3'>
                    <p className="mb-1">Gift Cards</p>
                    <p className='mb-1'>Terms of Use</p>
                    <p className='mb-1'>Corporate Information</p>
                </li>
            </ul>
            <div className='mb-5 text-xs pl-10'>
                {new Date().getFullYear()} © DTS Mini Project - Pair 41 - Aldy Rizky Putra - Desi Siti Maryam.
            </div>
        </div>
    )
}

export default Footer