/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Navtabs.jsx
 * Date : 1/14/2024 15:53:28 PM
 *******************************************************************/
import { Link } from 'react-router-dom';
import Navigation from './UI/Navigation';

export default function Navtabs() {
     return (
          <Navigation
               links={[
                    <li key={1} className="nav-item"><Link className="nav-link fs-3" to="/" id="home">Home</Link></li>,
                    <li key={2} className="nav-item"><Link className="nav-link fs-3" to="/Projects" id="project">Projects</Link></li>,
                    <li key={3} className="nav-item"><Link className="nav-link fs-3" to="/Contact" id="contact">Contact</Link></li>,
                    <li key={4} className="nav-item"><Link className="nav-link fs-3" to="/About" id="abou">About</Link></li>,
                    <li key={5} className="nav-item"><Link className="nav-link fs-3" to="/Resume" id="abou">Resume</Link></li>,
               ]}
          />
     );
}