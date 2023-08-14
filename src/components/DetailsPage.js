import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Simulating API call to fetch details based on the ID
    fetchDetails(id)
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, [id]);

  const fetchDetails = (id) => {
    // Replace this with your actual API call to fetch the details
    return new Promise((resolve, reject) => {
      // Simulating a delay
      setTimeout(() => {
        const details = { id, title: 'Example Title', description: 'Example Description' };
        resolve(details);
      }, 1000);
    });
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Details Page</h2>
      <p>ID: {details.id}</p>
      <p>Title: {details.title}</p>
      <p>Description: {details.description}</p>
    </div>
  );
};

export default DetailsPage;
