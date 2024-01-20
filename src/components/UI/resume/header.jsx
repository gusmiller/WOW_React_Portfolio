/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: contactheader.jsx
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Resumeheader() {
     return (
          <div className="row">
               <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 mr-1">
                    <h3>More then 25 years developing software.</h3>
                    <p className="fst-italic">
                         Since I started my career Developing software I have need had a boring day in my life. Every contract has been exhilirating and challenging at the same time. In all my years I have seen the industry change from MS-Dos, Windows to SmartPhones!
                    </p>
                    <ul>
                         <li>ASP.Net 7.0 Core - Microsoft.</li>
                         <li>Javascripts / NodeJS / Express.</li>
                         <li>Database modeling in SQL Server / MySQL / Mongo.</li>
                    </ul>
                    <p>
                         In this last stretch of my career I decided to pursue a University Certification in my field. And so, I register myself into Carelton University Coding Bootcamp. In this intense program I have learn so many new skill to add to my already set of skill that I have brushed over the years.                         
                    </p>
                    <p>Here is a copy of <a href="/gustavo miller@miller-hs.pdf">Gustavo Miller</a> latest resume</p>
               </div>
               <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img target="_blank" src="/resume.png" alt="" className="img-fluid" />
               </div>
          </div >
     )
};