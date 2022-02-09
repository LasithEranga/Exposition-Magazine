import React from 'react';
import './App.css';
import Header from './components/Header';
import LatestArticles from './components/LatestArticles';
import MainImage from './components/MainImage';
import CardView from './components/CardView';
import HorizontalView from './components/HorizontalCarousel';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <LatestArticles/>
      <MainImage/>
     <div>
    <Header/>
    <p></p>
    <HorizontalView />
    </div>
    </React.Fragment>
  );
}

export default App;
