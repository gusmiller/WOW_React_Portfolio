/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: form.jsx
 * Date : 1/16/2024 14:43:18 PM
 *******************************************************************/
import React, { useState } from 'react';

export default function FormContact() {
     const [firstname, setFirstName] = useState('');
     const [lastname, setLastName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');

     const handleSubmit = (e) => {
          if (name && email && message) {               
               setName('');// Reset form fields
               setEmail('');
               setMessage('');

               alert("Details submitted");
          } else {
               alert("Please submit all fields");
          }
     };

     return (

          <form id="contact-form" role="form" onSubmit={handleSubmit}>
               <div className="controls">
                    <div className="row mb-3">
                         <div className="col-md-6">
                              <div className="form-group">
                                   <label for="firstname">First name *</label>
                                   <input id="firstname" type="text" name="firstname" 
                                        className="form-control" placeholder="Please enter your firstname *"
                                        value={firstname} onChange={(e) => setName(e.target.value)}
                                        required="required" data-error="Firstname is required." />
                              </div>
                         </div>
                         <div className="col-md-6">
                              <div className="form-group">
                                   <label for="lastname">Last name *</label>
                                   <input id="lastname" type="text" name="lastname" 
                                        value={lastname} onChange={(e) => setName(e.target.value)}
                                        className="form-control" placeholder="Please enter your lastname *"
                                        required="required" data-error="Lastname is required." />
                              </div>
                         </div>
                    </div>
                    <div className="row mb-3">
                         <div className="col-md-6">
                              <div className="form-group">
                                   <label for="email">Email *</label>
                                   <input id="email" type="email" name="email" 
                                        value={email} onChange={(e) => setName(e.target.value)}
                                        className="form-control" placeholder="Please enter your email *"
                                        required="required" data-error="Valid email is required." />

                              </div>
                         </div>
                    </div>
                    <div className="row">
                         <div className="col-md-12 mb-3">
                              <div className="form-group">
                                   <label for="message">Message *</label>
                                   <textarea id="message" name="message" className="form-control"
                                        value={message} onChange={(e) => setName(e.target.value)}
                                        placeholder="Write your message here." rows="4"
                                        required="required" data-error="Please, leave us a message."></textarea>
                              </div>

                         </div>

                         <div className="col-md-12">
                              <button className="btn btn-success" type="submit">Send Message</button>
                         </div>
                    </div>
               </div>
          </form>
     )
};