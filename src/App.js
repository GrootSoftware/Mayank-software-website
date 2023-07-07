import './App.css';
import Header from './components/Header';
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/menu.css";
import "./assets/css/new.css";
import "./assets/css/off-canvas.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/responsive.css";
import "./assets/css/rs-spacing.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mobileappdevelopment from './components/Mobileappdevelopment';
import Softwaredevelopment from './components/Softwaredevelopment';
import Blog from './Blog';
import Webdevelopment from './components/Webdevelopment';

function App() {
  return (
    <div className="App d">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/Contact" exact={true} element={<Contact />} />
        <Route path="/Mobileappdevelopment" exact={true} element={<Mobileappdevelopment />} />
        <Route path="/Softwaredevelopment" exact={true} element={<Softwaredevelopment />} />
        <Route path="/Blog" exact={true} element={<Blog />} />
        <Route path="/Webdevelopment" exact={true} element={<Webdevelopment />} />
      </Routes>

    </div>
  );
}

export default App;
