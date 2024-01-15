/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: Contact
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import ContactHeader from '../../components/UI/contact/contactheader';

export default function Contact() {
     return (
          <div className="container">
               <ContactHeader />

               <div className="row ">
                    <div className="col-lg-9 mx-auto">
                         <div className="card mt-2 mx-auto p-4 bg-light">
                              <div className="card-body bg-light">

                                   <div className="container">
                                        <form id="contact-form" role="form">
                                             <div className="controls">
                                                  <div className="row mb-3">
                                                       <div className="col-md-6">
                                                            <div className="form-group">
                                                                 <label for="form_name">Firstname *</label>
                                                                 <input id="form_name" type="text" name="name"
                                                                      className="form-control"
                                                                      placeholder="Please enter your firstname *"
                                                                      required="required" data-error="Firstname is required." />
                                                            </div>
                                                       </div>
                                                       <div className="col-md-6">
                                                            <div className="form-group">
                                                                 <label for="form_lastname">Lastname *</label>
                                                                 <input id="form_lastname" type="text" name="surname"
                                                                      className="form-control"
                                                                      placeholder="Please enter your lastname *"
                                                                      required="required" data-error="Lastname is required." /> 
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row mb-3">
                                                       <div className="col-md-6">
                                                            <div className="form-group">
                                                                 <label for="form_email">Email *</label>
                                                                 <input id="form_email" type="email" name="email"
                                                                      className="form-control" placeholder="Please enter your email *"
                                                                      required="required" data-error="Valid email is required." />

                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                 <label for="form_message">Message *</label>
                                                                 <textarea id="form_message" name="message" className="form-control"
                                                                      placeholder="Write your message here." rows="4"
                                                                      required="required"
                                                                      data-error="Please, leave us a message."></textarea>
                                                            </div>

                                                       </div>

                                                       <div className="col-md-12">
                                                            <button className="btn btn-success" type="submit">Send</button>                                                            
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}