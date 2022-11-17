import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
// import Nav from "./components/navbar";
import DevsAbout from "./components/DevsAbout";
import ProjectDesc from "./components/ProjectDesc";
// import Preview from "./components/Preview";
import Video from "./components/Video";

import "./App.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/DevsAbout" element={<DevsAbout />} />
              <Route path="/ProjectDesc" element={<ProjectDesc />} />
              {/* <Route path="/searchresults" element={ <SearchResults />} /> */}
              {/* <Route path="/searchresults/:id" element={ <Video />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
