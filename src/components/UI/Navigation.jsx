/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Navigation.jsx
 * Date : 1/14/2024 17:03:48 PM
 *******************************************************************/
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {

     const cp = useLocation().pathname;

     return (

          <nav className="navbar bg-primary navbar-dark navbar-expand-lg">
               <div className="container">
                    <Link className="navbar-brand" to="/"><i className="fa fa-smile-o" aria-hidden="true"></i> Gustavo Miller</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                         <ul className="navbar-nav" id="navScrollspy">
                              <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/' ? 'active' : ''}`} to="/" >Home</Link></li>
                              <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/Projects' ? 'active' : ''}`} to="/Projects" >Projects</Link></li>
                              <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/Contact' ? 'active' : ''}`} to="/Contact" >Contact</Link></li>
                              <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/About' ? 'active' : ''}`} to="/About" >About</Link></li>
                              <li key={1} className="nav-item"><Link className={`nav-link fs-3 ${cp === '/Resume' ? 'active' : ''}`} to="/Resume" >Resume</Link></li>
                         </ul>
                    </div>
               </div>
          </nav>
     );
}