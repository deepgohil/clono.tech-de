

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Marquee from 'react-fast-marquee';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [uploading, setUploading] = useState(false);

  const [pdfName, setPdfName] = useState('');
  const [success, setSuccess] = useState(false);
  const [randomCode, setRandomCode] = useState('');

  const [numCopies, setNumCopies] = useState(1); // Number of copies
  const [color, setColor] = useState('blackandwhite'); // Color selection

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const typedArray = new Uint8Array(reader.result);
  //       setNumPages(0); // Reset number of pages

  //       pdfjs.getDocument({ data: typedArray }).promise.then((pdf) => {
  //         setNumPages(pdf.numPages);
  //       });
  //     };

  //     reader.readAsArrayBuffer(file);

  //     const pdfName = file.name.split('.pdf')[0];
  //     setPdfName(pdfName);
  //   }
  // };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
  
      const reader = new FileReader();
      reader.onloadend = () => {
        const typedArray = new Uint8Array(reader.result);
        setNumPages(0); // Reset number of pages
  
        pdfjs.getDocument({ data: typedArray }).promise.then((pdf) => {
          setNumPages(pdf.numPages);
        });
      };
  
      reader.readAsArrayBuffer(file);
  
      const pdfName = file.name.split('.pdf')[0];
      setPdfName(pdfName);
    } else {
      // Handle the case when a non-PDF file is selected
      setSelectedFile(null);
      setNumPages(0);
      setPdfName("");
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        setUploading(true);

        const code = Math.random().toString(36).substring(2, 6).toUpperCase();
        setRandomCode(code);

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('name', pdfName);
        formData.append('code', code);
        formData.append('noOfCopy', numCopies);
        formData.append('Ctype', color);

        const response = await axios.post('https://deepgohil.centralindia.cloudapp.azure.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'mode': 'no-cors',
          },
        });

        console.log('API Response:', response.data);

        setSuccess(true);
      } catch (error) {
        console.error('API Error:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = randomCode;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  return (
    <>
      <Marquee className="bg-custom-black pt-5 font-mono text-custom-btn text-4 font-bold text-center relative">
        You will get a code after uploading. Please copy that.
      </Marquee>
      <div className="bg-custom-black min-h-screen flex items-center justify-center">
        <div className={`bg-custom-black p-8 rounded shadow-lg w-full sm:max-w-md ${success ? 'hidden' : ''}`}>
          <h1 className="text-3xl text-gray-200 mb-4 font-mono">Select File</h1>
          <div className="mb-4">
            <label className="block text-custom-pink mb-2 font-mono" htmlFor="uploadFile">
              File
            </label>
            <input
              type="file"
              accept=".pdf"
              className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
              id="uploadFile"
              onChange={handleFileChange}
            />
          </div>
          {selectedFile && (
            <div className="text-gray-200 mb-4">
              Selected PDF: {selectedFile.name}
              <br />
              Number of Pages: {numPages}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-custom-pink mb-2 font-mono" htmlFor="numCopies">
              Number of Copies
            </label>
            <input
              type="number"
              value={numCopies}
              onChange={(e) => setNumCopies(e.target.value)}
              className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
              id="numCopies"
            />
          </div>
          <div className="mb-4">
            <label className="block text-custom-pink mb-2 font-mono">Color</label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
            >
              <option value="blackandwhite">Black and White</option>
              <option value="color">Color</option>
            </select>
          </div>
          <button
            className="bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
          >
            {uploading ? 'Uploading...' : 'Upload PDF'}
          </button>
          {selectedFile && selectedFile.size <= 5 * 1024 * 1024 && (
            <div className="mt-4 max-h-96 overflow-y-scroll">
              <Document file={selectedFile}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page key={index} pageNumber={index + 1} />
                ))}
              </Document>
            </div>
          )}
        </div>
        {success && (
                    <>
                    <div className="mt-50 text-4xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {randomCode}
                    </div>

                    <button
                        className="ml-8 mr-8 mb-6 bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full absolute bottom-20"
                        onClick={copyToClipboard}
                    >
                        Copy Code
                    </button>

                    <button
                        className="ml-8 mr-8 bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full absolute bottom-4"
                        
                    >
                        <Link to="/search">Check Status</Link>
                    </button>
                    </>
        )}
      </div>
    </>
  );
};

export default MyForm;







// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import axios from 'axios';
// import './styles.css'; 

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const MyForm = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [numPages, setNumPages] = useState(0);
//   const [uploading, setUploading] = useState(false);
//   const [age, setAge] = useState('');

//   const handleAgeChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const typedArray = new Uint8Array(reader.result);
//         setNumPages(0); // Reset number of pages

//         pdfjs.getDocument({ data: typedArray }).promise.then((pdf) => {
//           setNumPages(pdf.numPages);
//         });
//       };

//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const handleUpload = async () => {
//     if (selectedFile) {
//       try {
//         setUploading(true);
//         const formData = new FormData();
//         formData.append('file', selectedFile);

//         const response = await axios.post('https://deepgohil.centralindia.cloudapp.azure.com/upload', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           },
//         });

//         // Handle the API response as needed
//         console.log('API Response:', response.data);
//       } catch (error) {
//         // Handle the API error
//         console.error('API Error:', error);
//       } finally {
//         setUploading(false);
//       }
//     }
//   };

//   return (
//     <div className="bg-custom-black min-h-screen flex items-center justify-center">
//       <div className="bg-custom-black p-8 rounded shadow-lg w-full sm:max-w-md">
//         <h1 className="text-3xl text-gray-200 mb-4 font-mono">Seleft file</h1>
      
//         <div className="mb-4">
//         <label className="block text-gray-200 mb-2 font-mono" htmlFor="uploadFile">
//             File
//           </label>
//           <input
//             type="file"
//             accept=".pdf"
//             className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
//             id="uploadFile"
//             onChange={handleFileChange}
//           />
//           <label className="block text-custom-pink mb-2 font-mono" htmlFor="uploadFile">
//             No of copy
//           </label>
//           <input
//             type="number"
//             className="bg-gray-700 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-gray-600 focus:border-gray-500"
//             id="ageInput"
//             value={age}
//             onChange={handleAgeChange}
//           />
       

//         </div>
//         {selectedFile && (
//           <div className="text-gray-200 mb-4">
//             Selected PDF: {selectedFile.name}
//             <br />
//             Number of Pages: {numPages}
//           </div>
//         )}
//         <button
//           className="bg-custom-btn hover:bg-gray-300 text-custom-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
//           onClick={handleUpload}
//           disabled={!selectedFile || uploading}
//         >
//           {uploading ? 'Uploading...' : 'Upload PDF'}
//         </button>
//         {selectedFile && (
//           <div className="mt-4 max-h-96 overflow-y-scroll">
//             <Document file={selectedFile}>
//               {Array.from(new Array(numPages), (el, index) => (
//                 <Page key={index} pageNumber={index + 1} />
//               ))}
//             </Document>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyForm;