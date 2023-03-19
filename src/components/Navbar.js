import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="/path/to/logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <a href="#" className="px-3 py-2 rounded-md text-xl font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:underline hover:underline-offset-8 hover:underline-position-y-3">About</a>
              <a href="#" className="ml-4 px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;