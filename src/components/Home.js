import React from 'react'
import Footer from './Footer';
import VideoWithText from './VideoWithText';


const GradientCard = () => (
  <>
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row space-x-4">
        <div
          className="w-1/2 rounded overflow-hidden shadow-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              Gradient Card 1
            </div>
            <p className="text-white text-base">
              This is the first gradient card.
            </p>
          </div>
        </div>
        <div
          className="w-1/2 rounded overflow-hidden shadow-lg bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              Gradient Card 2
            </div>
            <p className="text-white text-base">
              This is the second gradient card.
            </p>
          </div>
        </div>
      </div>

    </div>
    <VideoWithText/>
    </>
  );
  const style = {
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    color: 'white',
    textAlign: 'center',
    margin:'20px'
  };
function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="flex flex-wrap justify-center">
      <GradientCard  />
      <Footer/>
    </div>

  </div>
  )
}

export default Home