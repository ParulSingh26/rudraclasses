import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from 'react-toastify'

import HomePage from "./components/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Courses from "./components/Courses.jsx";
import Graphics from "./components/Graphics.jsx";
import Webdev from "./components/Webdev.jsx";
import Branding from "./components/Branding.jsx";
import Illustration from "./components/Illustration.jsx";
import UIdesign from "./components/UIdesign.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Resgister from "./components/Resgister.jsx";
import About from "./components/About.jsx";
import ThemeState from "./contextapi/themecontext/ThemeState.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/courses",
        element: <Courses />,
        children: [
          {
            path: "graphics",
            element: <Graphics />,
          },
          {
            path: "webdev",
            element: <Webdev />,
          },
          {
            path: "branding",
            element: <Branding />,
          },
          {
            path: "illustration",
            element: <Illustration />,
          },
          {
            path: "design",
            element: <UIdesign />,
          },
        ],
      },{
        path: '/contact',
        element: <Contact/>
      },{
        path: '/login',
        element: <Login/>
      },{
        path: '/register',
        element: <Resgister/>
      },{
        path: 'about',
        element: <About/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ThemeState>
    <RouterProvider router={routers} />
    </ThemeState>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
