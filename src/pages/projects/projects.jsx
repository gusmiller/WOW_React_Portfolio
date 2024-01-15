/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import ContactHeader from './projectheader';
import ProjectCard from './projectcard';

export default function Projects() {
     return (
          <div className="container mt-5 mb-3">
               <div className="row mb-5">
                    <ContactHeader />
               </div>

               <div className="row">
                    <ProjectCard name={"Weather Dashboard"} />
                    <ProjectCard name={"Work Day Scheduler"} />
                    <ProjectCard name={"Tech Blog"} />
               </div>
               <div className="row">
                    <ProjectCard name={"Note Taker"} />
                    <ProjectCard name={"Readme Bot"} />
               </div>
          </div>
     );
}