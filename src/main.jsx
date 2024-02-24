import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Browsers from './pages/browserApps/Browsers.jsx';
import Apps from './pages/Apps/Apps.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "browsers",
    element: <Browsers />,
  },
  {
    path: "apps/:id",
    element: <Apps />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);