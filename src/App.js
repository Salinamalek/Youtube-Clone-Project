import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
// import Nav from "./components/navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="wrapper">
          {/* <Nav /> */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
