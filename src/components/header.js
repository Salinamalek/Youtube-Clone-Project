import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({searchTitle, setSearchTitle}) {
  return (
    <div>
      <header>
        <h1>
          <span className="you">You</span>
          <span className="tube">Tube</span>
        </h1>
        <br />
        <h2>
          <Link to="/" className="linkColor">
            Home
          </Link>
          <Link to="/about" className="linkColor">
            About
          </Link>
        </h2>
        <br />
        <Search setSearchTitle={setSearchTitle} searchTitle={searchTitle} />
      </header>
    </div>
  );
}
