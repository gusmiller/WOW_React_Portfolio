/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/14/2024 16:08:28 PM
 *******************************************************************/
import './about.css';

export default function About() {
     return (
          <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
               <div className="card p-4">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                         <button className="btn btn-secondary">
                              <img src="/gm.png" height="130" width="115" />
                         </button>
                         <span className="name mt-3">Gustavo Miller</span>
                         <span className="idd">gustavo.miller@miller-hs.com</span>
                         <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">27
                              <span className="follow"> Years Experience</span></span>
                         </div>
                         <div className="text mt-3">
                              <span>I have been a developer for most of my life. I decided to enrol to Carleton Bootcamp to complete my career and to learn some new skills. I have had an exhilirating career developing software solutions for the Government of Canada as well as in the private sector.</span>
                         </div>
                         <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i
                              className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i
                                   className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span>
                         </div>
                    </div>
               </div>
          </div>
     );
}