


import React, { useState, useEffect } from 'react';
import { Search } from 'react-feather';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedSuggestion(null);
  };

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(`https://deepgohil.centralindia.cloudapp.azure.com/suggestions?search=${searchTerm}`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-custom-black text-white">
      <div className="relative bg-custom-btn px-6 py-4 rounded-lg shadow-lg mt-8">
        {!selectedSuggestion && (
          <div className="flex items-center">
            <Search className="w-6 h-6 text-custom-black mr-3" />
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none text-custom-black placeholder-custom-black"
              placeholder="Order number"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        )}
        {!selectedSuggestion && suggestions.length > 0 && (
          <div className="absolute z-10 mt-5 w-200 bg-custom-btn rounded-lg shadow-lg text-custom-black">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion._id}
                className="block px-4 py-2 hover:bg-custom-black cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <p className="text-custom-black ">{suggestion.code}</p>
        
              </div>
            ))}
          </div>
        )}
        {selectedSuggestion && (
          <div className="bg-custom-black rounded-lg shadow-lg p-4 mt-4 text-custom-black">
            <h2 className="text-lg font-semibold">{selectedSuggestion.code}</h2>
            <p>{selectedSuggestion.status}</p>
            <p>{selectedSuggestion.name}</p>
            <p>{selectedSuggestion.type}</p>
            <p>{selectedSuggestion.noOfCopy}</p>

          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;


