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
                    <ProjectCard name={"Weather Dashboard"} longago={"June 2023"} reponame={"Github"} appurl={""}/>
                    <ProjectCard name={"Work Day Scheduler"} longago={"July 2023"}  reponame={"Github"} appurl={""}/>
                    <ProjectCard name={"Tech Blog"} longago={"September 2023"}  reponame={"Github"} appurl={""}/>
               </div>
               <div className="row">
                    <ProjectCard name={"Note Taker" } longago={"August 2023"}  reponame={"Github"} appurl={""}/>
                    <ProjectCard name={"Readme Bot"} longago={"August 2023"}  reponame={"Github"} appurl={""}/>
                    <ProjectCard name={"Cravings"} longago={"October 2023"}  reponame={"Heroku"} appurl={""}/>
               </div>
               <div className="row">
                    <ProjectCard grade="100%" name={"Password Generator"} longago={"August 2023"} reponame={"Github"} appurl={"https://gusmiller.github.io/Javascripts/"}/>
                    <ProjectCard grade="92%" name={"Personal Portfolio"} longago={"August 2023"} reponame={"Github"} appurl={"https://gusmiller.github.io/Portfolio/"}/>
               </div>
          </div>
     );
}