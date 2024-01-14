/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/14/2024 15:43:18 PM
 *******************************************************************/
import { useRouteError } from 'react-router-dom'; //Hook from react-router-dom

export default function ErrorPage() {
     const error = useRouteError(); //Hook from react-router-dom
     console.error(error); //Show error on console

     return (
          <div id="error-page">
               <h1>Error ocurred!</h1>
               <p>Sorry, an unexpected error has occurred.</p>
               <p>
                    <i>{error.statusText || error.message}</i>
               </p>
          </div>
     );
}
