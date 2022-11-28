import { Link } from "react-router-dom";

export default function About() {
  return (
    <section>
      <div className="aboutHeader">
        <h1>About Page</h1>
      </div>
      <div>
        <p>
          <Link to="/ProjectDesc">Project Description</Link>
        </p>
        <p>
          <Link to="/DevsAbout">About the Devs</Link>
        </p>
      </div>
    </section>
  );
}
