import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home';
import Categories from './component/Categories/Categories';
import Meals from './component/Meals/Meals';
import About from './component/About/About';
import Contact from './component/Contact/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home></Home></div>,
    children: [
      {
        path: '/categories',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php/'),
        element: <Categories></Categories>,
      },
      {
        path: '/meals',
        loader: () => ('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'),
        element: <Meals></Meals>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
