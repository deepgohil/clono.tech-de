

import React, { useState } from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import TypewriterAnimation from './TypewriterAnimation';
import './HomePage.css'; // Import custom CSS file

const HomePage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [numPages, setNumPages] = useState(0);
    const [uploading, setUploading] = useState(false);
    const handleUpload = async () => {
        // Your upload logic here
    };

    return (
        <>
            {/* <TypewriterAnimation text="deep gohil" /> */}
            <Marquee className="bg-custom-black pt-5 font-mono text-custom-btn text-4 font-bold text-center relative">
            Surveillance is the business model of the Internet  .
            </Marquee>
            <div className="bg-custom-black flex flex-col justify-center items-center min-h-screen">
                {/* Rest of your content */}
                <h1 className="font-mono text-gray-200 text-4xl font-bold text-center relative">
                    We both love <br/>privacy & security
                    <span className="mt-5 absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-indigo-600 rounded-full"></span>
                </h1>
                <button
                    className="bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 mt-5 focus:outline-none focus:shadow-outline"
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                >
                    <Link to="/xerox">Xerox</Link>
                </button>

                <button
                    className="bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 mt-5 focus:outline-none focus:shadow-outline"
                    onClick={handleUpload}
                    disabled={!selectedFile || uploading}
                >
                    <Link to="/search">History</Link>
                </button>

                <div className="max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-custom-glass dark:border-custom-border mx-auto my-6 sm:max-w-md sm:p-4 md:max-w-lg">
      <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path>
        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
      </svg>
      <a href="#">
        <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">What is clono.tech ?</h5>
      </a>
      <p className="mb-2 text-xs font-normal text-gray-500 dark:text-gray-400">Get your Print without the need to share your mobile number or email</p>
      <a href="#" className="inline-flex items-center text-indigo-600 hover:underline">
        See our guideline
        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </div>
            </div>
        </>
    );
};

export default HomePage;

