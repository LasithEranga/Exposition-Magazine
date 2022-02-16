import React from "react";
import "./App.css";
import Header from "./components/Header";
import AllArticles from "./Pages/CategoryView/AllArticles";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Buttons/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";
import ArticleView from "./Pages/ArticleView";
import DemoBook from "./Pages/ThreeDView";
import useTime from "./hooks/useTime";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

function App() {
  const delay = useTime(2000);

  return (
    <React.Fragment>
      {delay && (
        <React.Fragment>
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />

            <Route element={<AboutUs />} path="/about-us" />

            <Route element={<DemoBook />} path="/3d-view" />

            <Route element={<AllArticles />} path="/articlefilter/:category" />

            <Route element={<AllArticles all />} path="/articlefilter" />

            <Route element={<ArticleView />} path="/articles/:id" />

            <Route element={<NotFound />} path="*" />
          </Routes>
          <Footer />
          <ScrollToTop />
        </React.Fragment>
      )}
      {!delay && <LoadingSpinner />}
    </React.Fragment>
  );
}

export default App;
