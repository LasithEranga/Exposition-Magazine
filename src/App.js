import React from "react";
import "./App.css";
import Header from "./components/Header";
import LatestArticles from "./components/LatestArticles";
import MainImage from "./components/MainImage";
import HorizontalView from "./components/HorizontalCarousel";
import BelowLanding from "./components/BelowLanding";
import SuccessStories from "./components/SuccessStories";
import SectionFour from "./components/SectionFour.jsx";
import SectionFive from "./components/SectionFive";
import MemoryLane from "./components/MemoryLane";
import Team from "./components/Team";

function App() {
  return (
    <React.Fragment>
      <Header />
      <LatestArticles />
      <MainImage />

      <div className="mt-4 px-3 px-md-0">
        <HorizontalView />
      </div>
      <div className="mt-4">
      <BelowLanding />
      </div>
      
      <SuccessStories/>
      <div className="mt-4">
      <SectionFour />
      </div>
      <div className="mt-4">
      <SectionFive />
      </div>
      <div className="mt-4">
      <MemoryLane />
      </div>
      <div className="mt-4">
      <Team />
      </div>
    </React.Fragment>
  );
}

export default App;
