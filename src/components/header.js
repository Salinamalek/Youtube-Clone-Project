import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 id="youtube">YouTube</h1>
      <h2>
        <Link to="/">Home</Link>
      </h2>
      <h2>
        <Link to="/about">About</Link>
      </h2>
    </header>
  );
}
