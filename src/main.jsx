/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 20 - React Portfolio
 * 
 * Filename: main.jsx
 * Date : 1/10/2024 8:03:28 AM
 *******************************************************************/
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Error from './pages/Error';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import About from './pages/about';
import Resume from './pages/resume';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'font-awesome/css/font-awesome.css'
import './index.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
     {
          path: '/',
          element: <App />,
          errorElement: <Error />,
          children: [
               {
                    index: true,
                    element: <Home />,
               },
               {
                    path: '/Projects',
                    element: <Projects />,
               },
               {
                    path: '/Contact',
                    element: <Contact />,
               },
               {
                    path: '/About',
                    element: <About />,
               },
               {
                    path: '/Resume',
                    element: <Resume />
               }
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);