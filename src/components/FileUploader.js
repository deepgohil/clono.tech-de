// // import React, { useState } from 'react';

// // function FileUploader() {
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (event) => {
// //     setFile(event.target.files[0]);
// //   }

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const formData = new FormData();
// //     formData.append('file', file);

// //     fetch('https://deepgohil-glorious-halibut-rvg4pjvr7v5cwjj4-8000.preview.app.github.dev/uploadfile', {
// //       method: 'POST',
// //       body: formData,
// //       mode: 'no-cors',
// //       "Access-Control-Allow-Origin" : "*", 
// // "Access-Control-Allow-Credentials" : true ,
// // 'Content-Type': 'multipart/form-data'
// //     })
// //     .then(response => response.text())
// //     .then(result => console.log(result))
// //     .catch(error => console.log('error', error));
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="file" onChange={handleFileChange} />
// //       <button type="submit">Upload</button>
// //     </form>
// //   );
// // }

// // export default FileUploader;


// // // import React, { useState } from 'react';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// // // import axios from 'axios';

// // // function FileUploader() {
// // //   const [file, setFile] = useState(null);

// // //   const handleFileChange = (event) => {
// // //     setFile(event.target.files[0]);
// // //   };

// // //   const handleSubmit = (event) => {
// // //     event.preventDefault();

// // //     const formData = new FormData();
// // //     formData.append('file', file);

// // //     // fetch('https://deepgohil-glorious-halibut-rvg4pjvr7v5cwjj4-8000.preview.app.github.dev/uploadfile', {
// // //     //   method: 'POST',
// // //     //   body: formData,
// // //     //   mode: 'no-cors'
// // //     // })
// // //     //   .then((response) => {
// // //     //     if (response.ok) {
// // //     //       toast.success("sucess 1")
// // //     //     } else {
// // //     //       console.log(response);
// // //     //       toast.success("sucess 2")
// // //     //     }
// // //     //   })
// // //     //   .catch((error) => {
// // //     //     toast.success("sucess 3")
// // //     //   });
// // //     axios({
// // //       method: 'post',
// // //       url: 'https://deepgohil-glorious-halibut-rvg4pjvr7v5cwjj4-8000.preview.app.github.dev/uploadfile',
// // //       data: formData,
// // //       headers: {'Content-Type': 'multipart/form-data'},
// // //       "Access-Control-Allow-Origin" : "*", 
// // // "Access-Control-Allow-Credentials" : true 
// // //     })
// // //       .then((response) => {
// // //         console.log(response);
// // //       })
// // //       .catch((error) => {
// // //         console.error(error);
// // //       });
// // //   };

// // //   return (
// // //     <div>
// // //       <form onSubmit={handleSubmit}>
// // //         <label>
// // //           File:
// // //           <input type="file" onChange={handleFileChange} />
// // //         </label>
// // //         <br />
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //       <ToastContainer />
// // //     </div>
// // //   );
// // // }

// // // export default FileUploader;


// import React, { useState } from 'react';
// import axios from 'axios';

// function FileUploader() {
//   const [file, setFile] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     axios.post('https://deepgohil-glorious-halibut-rvg4pjvr7v5cwjj4-8000.preview.app.github.dev/uploadfile', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',"Access-Control-Allow-Origin" : "*", 
//         "Access-Control-Allow-Credentials" : true 
//     }, mode: 'no-cors'
//   })
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileChange} />
//       <button type="submit">Upload</button>
//     </form>
//   );
// }

// export default FileUploader;

import React, { useState } from "react";
import axios from "axios";
// import Marquee from "react-fast-marquee";

function FileUploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    axios.post("https://deepgohil-glorious-halibut-rvg4pjvr7v5cwjj4-8000.preview.app.github.dev/uploadfile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        // console.log(response.data);
        // toast.success("sucess  "+response.data)
        if (response.ok) {
         toast.success("sucess 1")
        } 
        else {
          // console.log(response.data.filename);
         toast.success(response.data.filename)
                  }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <ToastContainer />
    </div>
  );
}

export default FileUploader;
