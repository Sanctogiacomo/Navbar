import React from 'react';
import profile from "../../assets/profile.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import './Navbar.css';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);


return(
  <div className="app__navbar">
    <div className="app__navbar-headings">
    <h1>Class</h1>
    <h4 className="p__roboto">Physics (Lessons 1)</h4>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">Classroom</li>
      <li className="p__opensans">Notebook</li>
      <li className="p__opensans">Syllabus</li>
    </ul>
    <div className="app__navbar-sub">
    <div className="app__navbar-deco"> 
    <a href="https://www.google.com"><FontAwesomeIcon icon={faMessage}  className="message"/></a>
    <a href="#"><FontAwesomeIcon icon={faBell}  className="message"/></a>
  </div>
  <h1> Hello Kyle!</h1>
  <div className="app__navbar-profiler">
    <img src={profile} alt="profile/image" />
  </div>
  </div>

<div className="app__navbar-smallscreen">
  <FontAwesomeIcon icon={faBars} fontSize={27} color="#fff" 
  onClick={() => setToggleMenu(true)} className="Hamburger"/>

  {toggleMenu && (
      
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
      <FontAwesomeIcon icon={faXmark} fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
      

    <ul className="app__navbar-smallscreen-links">
      <li className="p__opensans">Classroom</li>
      <li className="p__opensans">Notebook</li>
      <li className="p__opensans">Syllabus</li>
    </ul>
    </div>
      )}

</div>
  </div>
)};

export default Navbar;
