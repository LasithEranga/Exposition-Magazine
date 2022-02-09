import React from 'react';
import './App.css';
import Header from './components/Header';
import LatestArticles from './components/LatestArticles';
import MainImage from './components/MainImage';
import HorizontalView from './components/HorizontalCarousel';
import StudentsCorner from './components/StudentsCorner';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <LatestArticles/>
      <MainImage/>
    <HorizontalView />
    <StudentsCorner />
    </React.Fragment>
  );
}

export default App;
