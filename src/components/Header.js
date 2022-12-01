import Modal from "./Modal";
import "./Modal.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import LogIn from "./LogIn";

export default function Header({ searchTitle, setSearchTitle }) {
  return (
    <div>
      <header>
        <h1>
          <span className="you">You</span>
          <span className="tube">Tube</span>
          <span className="homeAndAboutLinks">
            <Link to="/" className="linkColor">
              Home
            </Link>
            <Link to="/about" className="linkColor">
              About
            </Link>
            <LogIn />
          </span>
          <span id="searchForm">
            <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} />
          </span>
        </h1>
      </header>
    </div>
  );
}
