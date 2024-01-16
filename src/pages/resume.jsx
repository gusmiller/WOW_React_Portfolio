/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: resume.jsx
 * Date : 1/16/2024 12:36:18 PM
 *******************************************************************/
import ResumeHeader from '../components/UI/resume/header';

export default function Resume() {
     return (
          <div className="container mt-5">
               <ContactHeader />
               <ResumeHeader />
          </div>
     );
}