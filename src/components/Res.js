import React, { useState } from "react";

const GradientCard = ({ colors, title, description }) => (
  <div className="w-full md:w-1/2 p-4">
    <div
      className={`bg-gradient-to-r from-${colors[0]} to-${colors[1]} text-white rounded-lg p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-4">{description}</p>
    </div>
  </div>
);

const Res = () => {
  const [card1Data, setCard1Data] = useState(null);
  const [card2Data, setCard2Data] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleCardClick = async (cardIndex) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${cardIndex}`);
      const data = await response.json();
      if (cardIndex === 1) {
        setCard1Data(data);
      } else if (cardIndex === 2) {
        setCard2Data(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-wrap justify-center">
        <div onClick={() => handleCardClick(1)}>
          {card1Data ? (
            <GradientCard
              colors={["pink-500", "purple-500"]}
              title={card1Data.title}
              description={card1Data.body}
            />
          ) : (
            <GradientCard colors={["pink-500", "purple-500"]} />
          )}
        </div>
        <div onClick={() => handleCardClick(2)}>
          {card2Data ? (
            <GradientCard
              colors={["blue-500", "green-500"]}
              title={card2Data.title}
              description={card2Data.body}
            />
          ) : (
            <GradientCard colors={["blue-500", "green-500"]} />
          )}
        </div>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <button
          className={`p-2 rounded ${
            darkMode
              ? "bg-white text-gray-900 hover:bg-gray-200"
              : "bg-gray-900 text-white hover:bg-gray-700"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Res;