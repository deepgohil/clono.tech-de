import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import './styles.css'; 

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const typedArray = new Uint8Array(reader.result);
        setNumPages(0); // Reset number of pages

        pdfjs.getDocument({ data: typedArray }).promise.then((pdf) => {
          setNumPages(pdf.numPages);
        });
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploading(true);
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data','mode': 'no-cors'
          },
        });

        // Handle the API response as needed
        console.log('API Response:', response.data);
      } catch (error) {
        // Handle the API error
        console.error('API Error:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="bg-custom-black min-h-screen flex items-center justify-center">
      <div className="bg-custom-black p-8 rounded shadow-lg w-full sm:max-w-md">
        <h1 className="text-3xl text-gray-200 mb-4 font-mono">Seleft file</h1>
      
        <div className="mb-4">
        <label className="block text-gray-200 mb-2 font-mono" htmlFor="uploadFile">
            File
          </label>
          <input
            type="file"
            accept=".pdf"
            className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
            id="uploadFile"
            onChange={handleFileChange}
          />
          <label className="block text-custom-pink mb-2 font-mono" htmlFor="uploadFile">
            No of copy
          </label>
          <input
            type="number"
            className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
            id="ageInput"
            value={age}
            onChange={handleAgeChange}
          />
       

        </div>
        {selectedFile && (
          <div className="text-gray-200 mb-4">
            Selected PDF: {selectedFile.name}
            <br />
            Number of Pages: {numPages}
          </div>
        )}
        <button
          className="bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
        >
          {uploading ? 'Uploading...' : 'Upload PDF'}
        </button>
        {selectedFile && (
          <div className="mt-4 max-h-96 overflow-y-scroll">
            <Document file={selectedFile}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={index} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyForm;









