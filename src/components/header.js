import './components.css'
import { Link } from 'react-router-dom';
function Header() {

  function navfc() {
    var element = document.getElementById("nav_box");
    // var navbtn = document.getElementById("nav-btn")
    element.classList.toggle("active");
    console.log("okay")
  }

  return (
    <div className="Header_main">

      <header className="Header-header">

        <div class="left_contaner">
          <h2>Yadunandan Singh</h2>
        </div>
        
        <div class="Right_contaner">
        <div class="nav-btn" onClick={navfc}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
          
        </div >
        <div id="nav_box" class="nav_box">
          <ul>

            <li><Link to="/" class="link">Home</Link></li>
            <li><Link to="/About" class="link" >About</Link></li>
            <li><Link to="/Portfolio" class="link" >Portfolio</Link></li>
            <li><Link to="/Contact" class="link" >Contact</Link></li>
          </ul>
          </div>
        </div>

      </header>

    </div>
  );
}

export default Header;