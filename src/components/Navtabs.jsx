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
                    <Link key={1} className="nav-link text-light fs-3" to="/">Home</Link>,
                    <Link key={2} className="nav-link text-light fs-3" to="/Projects">Projects</Link>,
                    <Link key={3} className="nav-link text-light fs-3" to="/Contact">Contact</Link>,
                    <Link key={4} className="nav-link text-light fs-3" to="/About">About</Link>,
               ]}
          />
     );
}