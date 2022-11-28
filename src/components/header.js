import Modal from "./Modal";
import "./Modal.css";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
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
            <Modal />
          </span>
          <span id="searchForm">
            <Search />
          </span>
        </h1>
      </header>
    </div>
  );
}
