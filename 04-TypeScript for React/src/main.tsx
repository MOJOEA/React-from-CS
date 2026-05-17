import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Header from './components/header/Header.jsx'

// Import Pages สำหรับ Test 1 - 6
import Test1Page from './page/test1/page.js';
import Test1DetailPage from './page/test1/[id]/page.js';

import Test2Page from './page/test2/page.js';
import Test2DetailPage from './page/test2/[id]/page.js';

import Test3Page from './page/test3/page.js';
import Test3DetailPage from './page/test3/[id]/page.js';

import Test4Page from './page/test4/page.js';
import Test4DetailPage from './page/test4/[id]/page.js';

import Test5Page from './page/test5/page.js';
import Test5DetailPage from './page/test5/[id]/page.js';

import Test6Page from './page/test6/page.js';
import Test6DetailPage from './page/test6/[id]/page.js';

const routers = createBrowserRouter([
  {
    element: <Header />, // Layout หลักที่มี Header
    children: [
      {
        path: "/",
        element: <App />
      },
      // --- TEST 1 ---
      { 
        path: "/test1", 
        children: [
          { index: true, element: <Test1Page /> },
          { path: ":id", element: <Test1DetailPage /> }
        ]
      },
      // --- TEST 2 ---
      { 
        path: "/test2", 
        children: [
          { index: true, element: <Test2Page /> },
          { path: ":id", element: <Test2DetailPage /> }
        ]
      },
      // --- TEST 3 ---
      { 
        path: "/test3", 
        children: [
          { index: true, element: <Test3Page /> },
          { path: ":id", element: <Test3DetailPage /> }
        ]
      },
      // --- TEST 4 ---
      { 
        path: "/test4", 
        children: [
          { index: true, element: <Test4Page /> },
          { path: ":id", element: <Test4DetailPage /> }
        ]
      },
      // --- TEST 5 ---
      { 
        path: "/test5", 
        children: [
          { index: true, element: <Test5Page /> },
          { path: ":id", element: <Test5DetailPage /> }
        ]
      },
      // --- TEST 6 ---
      { 
        path: "/test6", 
        children: [
          { index: true, element: <Test6Page /> },
          { path: ":id", element: <Test6DetailPage /> }
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
