// import React from 'react';

// function Navbar() {
//   return (
//     // <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
//     //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="flex items-center justify-between h-16">
//     //       <div className="flex-shrink-0">
//     //         <img className="h-8 w-auto" src="/path/to/logo.svg" alt="Logo" />
//     //       </div>
//     //       <div className="hidden md:block">
//     //         <div className="ml-10 flex items-baseline">
//     //           <a href="#" className="px-3 py-2 rounded-md text-xl font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
//     //           <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">About</a>
//     //           <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// }

// export default Navbar;
import { useState } from "react";
import React from 'react';
import {
  Link,
  useLocation
} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const [navbar, setNavbar] = useState(false);
  return (
    
    // <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
    //   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex-shrink-0">
    //         <img className="h-8 w-auto" src="/path/to/logo.svg" alt="Logo" />
    //       </div>
    //       <div className="hidden md:block">
    //         <div className="ml-10 flex items-baseline">
    //           <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">Home</a>
    //           <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">About</a>
    //           <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">Contact</a>
    //           <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">About</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="javascript:void(0)">
                    <h2 className="text-2xl font-bold text-[#F6F1F1]">LOGO</h2>
                </a>
                <div className="md:hidden">
                    <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">
                        <a href="javascript:void(0)">Home</a>
                    </li>
                    <li className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">
                        <a href="javascript:void(0)">Blog</a>
                    </li>
                    <li className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">
                        <a href="javascript:void(0)">About US</a>
                    </li>
                    <li className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-[#F6F1F1] hover:underline hover:underline-offset-8 hover:underline-position-y-3">
                        <a href="javascript:void(0)">Contact US</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  );
};

export default Navbar;