import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'

import App from './App.jsx'
import Header from './components/header/Header.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TestPage from './page/Test/page.js';
import TestDetailPage from './page/Test/[id]/page.js';

import MoviePage from './page/Movie/page.js';
import MovieDetailPage from './page/Movie/[id]/page1.js';
import MovieTrailer from './page/Movie/[id]/page2.js';

const routers = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <App />
      },
      { 
        path: "/test", 
        children: [
          {
            index: true, 
            element: <TestPage /> 
          },
          {
            path: ":id", 
            element: <TestDetailPage /> 
          }
        ]
      },
      { 
        path: "/movie", 
        children: [
          {
            index: true, 
            element: <MoviePage /> 
          },
          {
            path: ":id", 
            element: <MovieDetailPage /> 
          },
          {
            path: ":id/trailer", 
            element: <MovieTrailer /> 
          }
        ]
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
