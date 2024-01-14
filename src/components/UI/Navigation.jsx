/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Navigation.jsx
 * Date : 1/14/2024 17:03:48 PM
 * 
 * 
 *******************************************************************/
export default function Navigation({ links }) {
     return (
          <nav className="navbar navbar-expand-lg bg-secondary">
               <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              {links.map((link) => link)}
                         </ul>
                    </div>
               </div>
          </nav>
     );
}