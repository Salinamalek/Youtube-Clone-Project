import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header"
import Home from './components/home'


function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <div className="wrapper">
          {/* <Nav /> */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
