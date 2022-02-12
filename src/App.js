import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Buttons/ScrollToTop";
import {Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<NotFound/>} path='*'/>
      </Routes>
      <Footer/>
      <ScrollToTop/>
    </React.Fragment>
  );
}

export default App;
