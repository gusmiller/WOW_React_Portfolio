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

var project = [
     {
          name: "Weather Dashboard",
          published: "June 2023",
          urladdress: "https://anthogr45.github.io/WeatherDashboard/",
          imagePath: "../src/assets/images/Weather.png",
          reponame: "https://github.com/anthogr45/WeatherDashboard",
          grade: "95%"
     },
     {
          name: "Work Day Scheduler",
          published: "June 2023",
          urladdress: "https://fierce-ridge-25865-7ffb2efa6e88.herokuapp.com",
          imagePath: "../src/assets/images/Techblog.png",
          reponame: "https://github.com/anthogr45/Tech-Blog?tab=readme-ov-file",
          grade: "95%"
     },

]
export default function Projects() {
     return (
          <div className="container mt-5 mb-3">
               <div className="row mb-5">
                    <ContactHeader />
               </div>

               <div className="row justify-content-between gap ">

                    {project.map((project, index) => (
                         <ProjectCard
                              key={index} 
                              name={project.name} 
                              published={project.published} 
                              reponame={project.reponame} 
                              appurl={project.urladdress} />
                    ))}

               </div>

          </div>
     );
}