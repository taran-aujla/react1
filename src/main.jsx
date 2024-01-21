import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import Mydata from "./components/Mydata/Mydata.jsx";

//creating router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "user/:id",
        element: <User />,
      },
      {
        path: "github/:userr",
        element: <Github />,
      },
      {
        path: "mydata",
        element: <Mydata />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
