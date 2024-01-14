/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/14/2024 15:53:28 PM
 * 
 * Validate each currentPage (cp) and check its value, and if so we 
 * use the active link class from bootstrap. Otherwise, we set it to 
 * a normal nav-link
 *******************************************************************/
import { Link, useLocation } from 'react-router-dom';

export default function Navtabs() {
     const cp = useLocation().pathname; //Hook from react-router-dom

     return (
          <ul className="nav nav-tabs">
               <li className="nav-item">
                    <Link to="/" className={cp === '/' ? 'nav-link active' : 'nav-link'} >Home</Link>
               </li>
               <li className="nav-item">
                    <Link to="/Projects" className={cp === '/Projects' ? 'nav-link active' : 'nav-link'} >Projects</Link>
               </li>
               <li className="nav-item">
                    <Link to="/Contact" className={cp === '/Contact' ? 'nav-link active' : 'nav-link'} >Contact</Link>
               </li>
               <li className="nav-item">
                    <Link to="/About" className={cp === '/About' ? 'nav-link active' : 'nav-link'} >About</Link>
               </li>
          </ul>
     );
}