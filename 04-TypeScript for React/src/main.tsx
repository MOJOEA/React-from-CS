import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'

import App from './App.jsx'
import Header from './components/header/Header.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TestPage from './page/test1/page.js';
import TestDetailPage from './page/test1/[id]/page.js';


const routers = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <App />
      },
      { 
        path: "/test1", 
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
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
