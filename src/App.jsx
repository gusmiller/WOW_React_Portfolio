/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Date : 1/10/2024 8:03:28 AM
 * 
 * The Outlet component will conditionally swap between the different
 * pages according to the URL
 *******************************************************************/
import { Outlet } from 'react-router-dom';
import NavigationBar from './components/Navtabs';

function App() {
     return (
          <>
               <NavigationBar />
               <main className="mx-3">
                    <Outlet />
               </main>
          </>
     );
}

export default App;