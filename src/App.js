import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './components/Counter';
import Home from './components/Home';
import VideoWithText from './components/VideoWithText';
import Res from './components/Res';
import FileUploader from './components/FileUploader';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Cards from './components/Cards';
function App() {
  

  return (
    <>
    <Router>

        
            <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/res" element={<Res/>} />
            <Route path="/VideoWithText" element={<VideoWithText/>} />
            <Route path="/upload" element={<FileUploader/>} />
            <Route path="/footer" element={<Footer/>} />
            <Route path="/hero" element={<Hero/>} />
            <Route path="/cards" element={<Cards/>} />
              {/* <Route path="/products" exact component={<Products/>}></Route>
              <Route path="/about" element={<About/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
              <RoVideoWithTextute path="/products" element={<Products/>} /> */}
              </Routes>
          

    </Router>
</>
  );
}

export default App;
