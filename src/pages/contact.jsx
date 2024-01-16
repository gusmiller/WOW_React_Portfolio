/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Contact
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import ContactHeader from '../components/UI/contact/contactheader';
import ContactForm from '../components/UI/contact/form';

export default function Contact() {

     return (
          <div className="container mt-5">
               <ContactHeader />

               <div className="row ">
                    <div className="col-lg-9 mx-auto">
                         <div className="card mt-2 mx-auto p-4 bg-light">
                              <div className="card-body bg-light">

                                   <div className="container">
                                        <ContactForm />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}