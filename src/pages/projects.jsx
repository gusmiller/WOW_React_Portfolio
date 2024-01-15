/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import ContactHeader from '../components/UI/projects/projectheader';
import ProjectCard from '../components/UI/projects/projectcard';

var assignments = [
     {
          name: "Weather Dashboard",
          published: "June 2023",
          repo: "gitHub",
          stack: "javascript",
          urladdress: "https://anthogr45.github.io/WeatherDashboard/",
          imagePath: "../src/assets/images/Weather.png",
          reponame: "https://github.com/anthogr45/WeatherDashboard",
          barsize: "50",
          grade: "95%",
          nameclass: "progress-bar w-50"
     },
     {
          name: "Work Day Scheduler",
          published: "June 2023",
          repo: "gitHub",
          stack: "javascript",
          urladdress: "https://fierce-ridge-25865-7ffb2efa6e88.herokuapp.com",
          imagePath: "../src/assets/images/Techblog.png",
          reponame: "https://github.com/anthogr45/Tech-Blog?tab=readme-ov-file",
          barsize: "75",
          grade: "95%",
          nameclass: "progress-bar w-75"
     },
     {
          name: "Work Day Scheduler",
          published: "June 2023",
          repo: "gitHub",
          stack: "javascript",
          urladdress: "https://fierce-ridge-25865-7ffb2efa6e88.herokuapp.com",
          imagePath: "../src/assets/images/Techblog.png",
          reponame: "https://github.com/anthogr45/Tech-Blog?tab=readme-ov-file",
          barsize: "100",
          grade: "95%",
          nameclass: "progress-bar w-25"
     },
     {
          name: "Work Day Scheduler",
          published: "June 2023",
          repo: "gitHub",
          stack: "javascript",
          urladdress: "https://fierce-ridge-25865-7ffb2efa6e88.herokuapp.com",
          imagePath: "../src/assets/images/Techblog.png",
          reponame: "https://github.com/anthogr45/Tech-Blog?tab=readme-ov-file",
          barsize: "100",
          grade: "95%",
          nameclass: "progress-bar w-100"
     }
]
export default function Projects() {
     return (
          <div className="container mt-5 mb-3">
               <div className="row mb-5">
                    <ContactHeader />
               </div>

               <div className="row justify-content-between gap">

                    {assignments
                         .map((assignments, index) => (
                              <ProjectCard
                                   key={index}
                                   name={assignments.name}
                                   published={assignments.published}
                                   reponame={assignments.reponame}
                                   stack={assignments.stack}
                                   grade={assignments.grade}
                                   barsize={assignments.barsize}
                                   appurl={assignments.urladdress}
                                   classname={assignments.nameclass} />
                         ))}

               </div>

          </div>
     );
}