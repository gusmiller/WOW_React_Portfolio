/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: projectcard.jsx
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
export default function ProjectCard(props) {
     return (
          <div className="col-lg-4 col-md-6 col-sm-12">
               <div className="project-card p-3 mb-5">
                    <img src={props.imageurl} className="card-img-top card-image mb-4" />
                    <div className="d-flex justify-content-between">
                         <div className="d-flex flex-row align-items-center">
                              <div className="project-icon"> <i className={props.emoji}></i> </div>
                              <div className="ms-2 c-details">
                                   <h6 className="mb-0">{props.repo}</h6> <span>{props.published}</span>
                              </div>
                         </div>
                         <div className="project-badge"> <span>{props.stack}</span> </div>
                    </div>
                    <div className="mt-5">
                         <h3 className="heading"> <a target="_blank" href={props.appurl}>{props.name}</a> </h3>
                         <p>Click here for <a href={props.reponame} className="gihub-repo">Github Repository</a></p>
                         <div className="mt-5">
                              <div className="progress">
                                   <div className={props.classname} role="progressbar"></div>
                              </div>
                              <div className="mt-3"> <span className="text1">Graded: {props.grade}</span> </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}