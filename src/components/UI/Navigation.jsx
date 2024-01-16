/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Navigation.jsx
 * Date : 1/14/2024 17:03:48 PM
 *******************************************************************/
export default function Navigation({ links }) {
     return (

          <nav className="navbar bg-primary navbar-dark navbar-expand-lg">
               <div className="container">
                    <span className="navbar-brand"><i className="fa fa-smile-o" aria-hidden="true"></i> Gustavo Miller</span>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                         <ul className="navbar-nav" id="navScrollspy">
                              {links.map((link) => link)}
                         </ul>
                    </div>
               </div>
          </nav>
     );
}