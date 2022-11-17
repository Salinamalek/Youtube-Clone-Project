import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>
        <span className="you">You</span>
        <span className="tube">Tube</span>
      </h1>
      <h2>
        <Link to="/" className="linkColor">
          Home
        </Link>
      </h2>
      <h2>
        <Link to="/about" className="linkColor">
          About
        </Link>
      </h2>
    </header>
  );
}
