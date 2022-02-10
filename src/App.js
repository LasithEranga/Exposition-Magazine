import React from "react";
import "./App.css";
import Header from "./components/Header";
import LatestArticles from "./components/LatestArticles";
import MainImage from "./components/MainImage";
import HorizontalView from "./components/HorizontalCarousel";
import StudentsCorner from "./components/StudentsCorner";
import SuccessStories from "./components/SuccessStories";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LatestArticles />
      <MainImage />

      <div className="mt-4">
        <HorizontalView />
      </div>
      <StudentsCorner />
      <SuccessStories/>
    </React.Fragment>
  );
}

export default App;
