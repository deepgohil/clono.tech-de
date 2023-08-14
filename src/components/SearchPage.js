import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'react-feather';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterSuggestions(value);
  };

  const filterSuggestions = (value) => {
    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }
    const filteredSuggestions = dummySuggestions.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase()) ||
        suggestion.id.toString().includes(value)
    ).slice(0, 5);
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (name, id) => {
    // navigate(`/DetailsPage/${id}`);
  };

  const dummySuggestions = [
    { id: 1, name: 'Person 1' },
    { id: 2, name: 'Person 2' },
    { id: 3, name: 'Person 3' },
    { id: 4, name: 'Person 4' },
    { id: 5, name: 'Person 5' },
    { id: 6, name: 'Person 6' },
    { id: 7, name: 'Person 7' },
    { id: 8, name: 'Person 8' },
    { id: 9, name: 'Person 9' },
    { id: 10, name: 'Person 10' },
    { id: 11, name: 'Person 11' },
    { id: 12, name: 'Person 12' },
    { id: 13, name: 'Person 13' },
    { id: 14, name: 'Person 14' },
    { id: 15, name: 'Person 15' },
    { id: 16, name: 'Person 16' },
    { id: 17, name: 'Person 17' },
    { id: 18, name: 'Person 18' },
    { id: 19, name: 'Person 19' },
    { id: 20, name: 'Person 20' },
    { id: 21, name: 'Person 21' },
    { id: 22, name: 'Person 22' },
    { id: 23, name: 'Person 23' },
    { id: 24, name: 'Person 24' },
    { id: 25, name: 'Person 25' },
    { id: 26, name: 'Person 26' },
    { id: 27, name: 'Person 27' },
    { id: 28, name: 'Person 28' },
    { id: 29, name: 'Person 29' },
    { id: 30, name: 'Person 30' },
    { id: 31, name: 'Person 31' },
    { id: 32, name: 'Person 32' },
    { id: 33, name: 'Person 33' },
    { id: 34, name: 'Person 34' },
    { id: 35, name: 'Person 35' },
    { id: 36, name: 'Person 36' },
    { id: 37, name: 'Person 37' },
    { id: 38, name: 'Person 38' },
    { id: 39, name: 'Person 39' },
    { id: 40, name: 'Person 40' },
    { id: 41, name: 'Person 41' },
    { id: 42, name: 'Person 42' },
    { id: 43, name: 'Person 43' },
    { id: 44, name: 'Person 44' },
    { id: 45, name: 'Person 45' },
    { id: 46, name: 'Person 46' },
    { id: 47, name: 'Person 47' },
    { id: 48, name: 'Person 48' },
    { id: 49, name: 'Person 49' },
    { id: 50, name: 'Person 50' },
    { id: 51, name: 'Person 51' },
    { id: 52, name: 'Person 52' },
    { id: 53, name: 'Person 53' },
    { id: 54, name: 'Person 54' },
    { id: 55, name: 'Person 55' },
    { id: 56, name: 'Person 56' },
    { id: 57, name: 'Person 57' },
    { id: 58, name: 'Person 58' },
    { id: 59, name: 'Person 59' },
    { id: 60, name: 'Person 60' },
    { id: 61, name: 'Person 61' },
    { id: 62, name: 'Person 62' },
    { id: 63, name: 'Person 63' },
    { id: 64, name: 'Person 64' },
    { id: 65, name: 'Person 65' },
    { id: 66, name: 'Person 66' },
    { id: 67, name: 'Person 67' },
    { id: 68, name: 'Person 68' },
    { id: 69, name: 'Person 69' },
    { id: 70, name: 'Person 70' },
    { id: 71, name: 'Person 71' },
    { id: 72, name: 'Person 72' },
    { id: 73, name: 'Person 73' },
    { id: 74, name: 'Person 74' },
    { id: 75, name: 'Person 75' },
    { id: 76, name: 'Person 76' },
    { id: 77, name: 'Person 77' },
    { id: 78, name: 'Person 78' },
    { id: 79, name: 'Person 79' },
    { id: 80, name: 'Person 80' },
    { id: 81, name: 'Person 81' },
    { id: 82, name: 'Person 82' },
    { id: 83, name: 'Person 83' },
    { id: 84, name: 'Person 84' },
    { id: 85, name: 'Person 85' },
    { id: 86, name: 'Person 86' },
    { id: 87, name: 'Person 87' },
    { id: 88, name: 'Person 88' },
    { id: 89, name: 'Person 89' },
    { id: 90, name: 'Person 90' },
    { id: 91, name: 'Person 91' },
    { id: 92, name: 'Person 92' },
    { id: 93, name: 'Person 93' },
    { id: 94, name: 'Person 94' },
    { id: 95, name: 'Person 95' },
    { id: 96, name: 'Person 96' },
    { id: 97, name: 'Person 97' },
    { id: 98, name: 'Person 98' },
    { id: 99, name: 'Person 99' },
    { id: 100, name: 'Person 100' }
  ]

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-custom-black text-white">
      <div className="relative bg-custom-btn px-6 py-4 rounded-lg shadow-lg mt-8">
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
        {suggestions.length > 0 && (
          <div className="absolute z-10 mt-5 w-200 bg-custom-btn rounded-lg shadow-lg text-custom-black">
            {suggestions.map((suggestion) => (
              <Link
                to={`/DetailsPage/${suggestion.id}`}
                key={suggestion.id}
                className="block px-4 py-2 hover:bg-indigo-600"
                onClick={() => handleSuggestionClick(suggestion.name, suggestion.id)}
              >
                <p className="text-custom-black ">{suggestion.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
