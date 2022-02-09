import React from 'react';
import './App.css';
import Header from './components/Header';
import LatestArticles from './components/LatestArticles';
import MainImage from './components/MainImage';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <LatestArticles/>
      <MainImage/>
    </React.Fragment>
  );
}

export default App;
