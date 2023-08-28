import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './components/Home';
import VideoWithText from './components/VideoWithText';
import Res from './components/Res';
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Gradient from './components/Gradient';
import Form from './components/Form';
import LiveChart from './components/LiveChart';
import Xeroxhomepage from './components/MyForm';
import MyForm from './components/MyForm';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import SearchPage from './components/SearchPage';
import Test from './components/Test';

import TypewriterAnimation from './components/TypewriterAnimation';
// function App() {
  

//   return (
//     <>
//     <Router>

        
//             <Routes>
//             <Route path="/" element={<SearchPage/>} />
//             <Route path="/" element={<DetailsPage/>} />
//             <Route path="/res" element={<Res/>} />
//             <Route path="/VideoWithText" element={<VideoWithText/>} />
//             <Route path="/upload" element={<FileUploader/>} />
//             <Route path="/footer" element={<Footer/>} />
//             <Route path="/hero" element={<Hero/>} />
//             <Route path="/cards" element={<Cards/>} />
//             <Route path="/grad" element={<Gradient/>} />
//             <Route path="/form" element={<Form/>} />
//             <Route path="/chart" element={<LiveChart/>} />
//             <Route path="/xerox" element={<MyForm/>} />
//             <Route path="/hom" element={<HomePage/>} />


          
//               {/* <Route path="/products" exact component={<Products/>}></Route>
//               <Route path="/about" element={<About/>} />
//               <Route path="/cart" element={<Cart/>} />
//               <Route path="/home" element={<Home/>} />
//               <Route path="/products" element={<Products/>} />
//               <RoVideoWithTextute path="/products" element={<Products/>} /> */}
//               </Routes>
          

//     </Router>
// </>
//   );
// }



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/rev" element={<TypewriterAnimation/>} /> */}
        <Route path="/xerox" element={<MyForm/>} />
        <Route path="/search" element={<SearchPage />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/DetailsPage/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;





// import React from 'react';
// import Excel from './components/Excel';
// import SearchPage from './components/SearchPage';

// const App = () => {
//   return <SearchPage />;
// };

// export default App;



