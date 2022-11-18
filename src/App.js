import React, { useState, useEffect } from "react";
import "./components/DarkMode.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getPopularVideos } from "./api/fetch";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import DevsAbout from "./components/DevsAbout";
import ProjectDesc from "./components/ProjectDesc";
import Video from "./components/Video";

import "./App.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [popularVideos, setPopularVideos] = useState([]);
  const [searchVideos, setSearchVideos] = useState([]);

  const key = process.env.REACT_APP_API_KEY;

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    getPopularVideos()
      .then((res) => {
        setPopularVideos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function searchYoutube(search) {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=${key}`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchVideos(res);
      });
  }

  return (
    <div className={`App ${theme}`}>
      <Router>
        <div className="header">
          <Header />
        </div>
        <button className="theme" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <br />
        <br />
        <div className="wrapper">
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    popularVideos={popularVideos}
                    searchVideos={searchVideos}
                    searchYoutube={searchYoutube}
                  />
                }
              />
              <Route path="/About" element={<About />} />
              <Route path="/DevsAbout" element={<DevsAbout />} />
              <Route path="/ProjectDesc" element={<ProjectDesc />} />
              {/* <Route path="/searchresults" element={<SearchResults />} /> */}
              <Route path="/video/:id" element={<Video />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
