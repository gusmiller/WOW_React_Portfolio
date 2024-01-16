/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * * Filename: App.jsx
 * Date : 1/10/2024 8:03:28 AM
 * 
 * The Outlet component will conditionally swap between the different
 * pages according to the URL
 *******************************************************************/
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/Navtabs';

import { Link } from 'react-router-dom';

function App() {
     useEffect(() => {
          document.title = 'Wow - Gus Miller Profile'
     });

     return (
          <>
               <NavigationBar />
               <main className="mx-0">
                    <Outlet />
               </main>
               <footer className="profile-footer text-white footer mt-auto py-3 bg-primary fs-7">
                    Developed by Gustavo Miller © Copyright 2024
               </footer>
          </>
     );
}

export default App;