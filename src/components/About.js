export default function About() {
  return (
    <section>
    <div className="aboutSection">
      <div>
        <div>
          <h1 className="titleAbout">About Our Project</h1>
          <br />
          <p className="projDesc">
            The purpose of this fully functional application is to serve as a
            clone of YouTube. This project tests our coding skills and our
            understanding of JavaScript and React. Users are able to search up a
            keyword and the results will display a list of videos related to
            that keyword, just like YouTube.
          </p>
        </div>
        <hr className="devHr2"/>
        <h1 className="titleAbout">About Us</h1>
        <br/>
      </div>
      <div className="devs">
        <div className="salina">
          <h2>Salina Malek</h2>
          <br />
          <img
            className="photo"
            src="https://avatars.githubusercontent.com/u/105737474?s=400&u=b7415db52f9359ea3f32c6bc36dd3b2e315c5969&v=4"
          />
          <br />
          <br />
          <p>
            Hello world! My name is Salina and I am a student at Pursuit
            studying to become a fullstack web developer that positively impacts
            the world! As someone who enjoys volunteering and helping others, I
            hope to use the skills and knowledge obtained through Pursuit to
            develop applications that assist people with the means to improve
            their health, lifestyle, and quality of life with my shift into
            tech.
          </p>
          <br />
          <a
            href="https://github.com/Salinamalek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Salina's GitHub
          </a>
          <br />
          <br />
        </div>
        <hr className="devHr" />
        <br />
        <div className="daniel">
          <h1>Daniel Rodriguez</h1>
          <br />
          <img
            className="photo"
            src="https://avatars.githubusercontent.com/u/107489251?v=4"
          />
          <br />
          <br />
          <p>
            Hello, my name is Daniel Rodriguez and I am a Full Stack Web
            Development Fellow at the Pursuit Fellowship based out of New York
            City. The Pursuit Fellowship is an intensive 12 month software
            engineering fellowship with a 9% acceptance rate and a project-based
            curriculum which provides experience with languages such as
            Javascript, CSS, and HTML.
          </p>
          <br />
          <a
            href="https://github.com/DanielR2105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel's GitHub
          </a>
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      </div>
      <div>
        <footer>
          <p>YouTube™</p>
        </footer>
      </div>
    </section>
  );
}
