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
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

import 'bootstrap/dist/css/bootstrap.min.css'
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
          ],
     },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
);