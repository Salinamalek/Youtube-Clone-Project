import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </article>
      <nav>
        <h1>
          <Link to="/about">About</Link>
        </h1>
      </nav>
    </header>
  );
}
