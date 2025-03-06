import "./pages.css"
import { Link } from "react-router-dom";
function Home() {

  return (
    
    <div className="Home-main">

      <div className="home-body">
        <div className="Home-header">
          <h1 className="hello">Hello, Hola, नमस्ते !</h1>
        </div>
        <div className="intro"><p>I'm <span className="color">Yadunandan singh</span> — a Full Stack Web Developer, Competitive Programmer, Data Science Enthusiast, and an Open Source Contributor, who's in love with<span className="color"> &lt;/&gt;</span>.</p></div>
      </div>

      <div className="wrok_intro">
        <div className="itro-header-box">
          <b>
            WHO AM I
          </b>
        </div>
        <div className="wrk-itro-body">
          <p >Hello World, I'm a Computer Programmer with an interest in Web Development, Competitive Programming, and
            Data Science. I've been working as a Software Developer
            for the last 1 Years with self experience. Apart from my profession, I've a serious passion of teaching and spreading knowledge to mankind.</p>
        </div>
        <div className="about-me"><Link to="/About" className="link" >Let's Know More</Link>
        </div>
      </div>
      <div className="what_i_do">
        <div className="itro-header-box wid">
          <b>
            WHAT I DO
          </b>
        </div>
        <div className="WID-contain">
          <p>I'm a web developer working with several tech stacks including MERN, MEAN, LAMP, and also a native app developer currently using React Native. My work includes creating SPA websites, PWA web applications, server-side development using nodeJS, and Python with both MySQL & MongoDB. Other than development, I also do Competitive Programming.</p>
        </div>

        <div className="dev-tool">

          <div className="WAD-dev dev-box">
            <div className="WAD svg">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-window" viewBox="0 0 16 16">
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z" />
              </svg>

            </div>

            <div>
              <h4>Web App Developer</h4>
              <p>I work with React and nodeJS as Full Stack Developer, it includes both front-end and back-end development.</p>
            </div>
          </div>

          <div className="SD-dev dev-box">

            <div className="SD svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
              </svg>
            </div>

            <div>
              <h4>Software Development</h4>
              <p>Implementation of Algorithms and Data Structure using C, C++, Python, JS in projects.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;