import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Specification from './Pages/Specification/Specification';
import Highlights from './Pages/Highlights/Highlights';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Provider from './Provider/Provider';
import PrivateRoute from './PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Highlights></Highlights>,
      },
      {
        path: "/specification",
        element: <Specification></Specification>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/home",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </Provider>


  </React.StrictMode>,
)
