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
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}