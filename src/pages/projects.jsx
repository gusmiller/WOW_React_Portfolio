/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: projects.jsx
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import ContactHeader from '../components/UI/projects/projectheader';
import ProjectCard from '../components/UI/projects/projectcard';

import assignments from '../utils/assignments.js';

export default function Projects() {
     return (
          <div className="container mt-5 mb-3">
               <div className="row mb-5">
                    <ContactHeader />
               </div>

               <div className="row justify-content-between">

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