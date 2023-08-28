import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint to fetch the details based on the ID
    fetch(`http://127.0.0.1:8000/get_details/${id}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Error fetching details:', error));
  }, [id]);

  if (!details) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Code: {details.code}</p>
      <p>Status: {details.status}</p>
      <p>Number of Copies: {details.noOfCopy}</p>
      <p>Type: {details.type}</p>
      <p>Path: <a href={details.path} target="_blank" rel="noopener noreferrer">{details.path}</a></p>
    </div>
  );
};

export default DetailsPage;
