import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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
  

  useEffect(() => {
    getPopularVideos()
      .then((res) => {
        setPopularVideos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Home popularVideos={popularVideos}/>} />
              <Route path="/About" element={<About />} />
              <Route path="/DevsAbout" element={<DevsAbout />} />
              <Route path="/ProjectDesc" element={<ProjectDesc />} />
              {/* <Route path="/searchresults" element={ <SearchResults />} /> */}
              <Route path="/video/:id" element={ <Video />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
