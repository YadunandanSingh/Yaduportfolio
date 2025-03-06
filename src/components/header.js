import React, { useState, useEffect } from 'react';
import './components.css';
import { Link } from 'react-router-dom';

function Header() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const name = 'Yadunandan Singh';
  const period = 1000; // Time before starting to delete

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % name.length;
      const fullText = name;

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, name]);

  function navfc() {
    var element = document.getElementById("nav_box");
    element.classList.toggle("active");
    console.log("okay");
  }

  return (
    <div className="Header_main">
      <header className="Header-header px-3">
        <div className="left_contaner ">
          <h2>{text}</h2>
        </div>
        
        <div className="Right_contaner">
          <div className="nav-btn" onClick={navfc}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div id="nav_box" className="nav_box">
            <ul>
              <li><Link to="/" className="link">Home</Link></li>
              <li><Link to="/About" className="link">About</Link></li>
              <li><Link to="/Portfolio" className="link">Portfolio</Link></li>
              <li><Link to="/Contact" className="link">Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;