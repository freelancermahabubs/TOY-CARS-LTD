import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Blogs from "../Page/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import AddToys from "../Page/AddToys/AddToys";
import AllToys from "../Page/AllToys/AllToys";

import ToysDetails from "../Page/ToysDetails/ToysDetails";
import MyToys from "../Page/MyToys/MyToys";
import UpdateToy from "../Page/UpdateToy/UpdateToy";
import SingleToyDetails from "../Page/SingleToyDetails/SingleToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />,
          </PrivateRoute>
        ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `https://toy-cars-ltd-server.vercel.app/updateToys/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ToysDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-cars-ltd-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/singleToyDetails/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-cars-ltd-server.vercel.app/allToys/${params.id}`),
      },
    ],
  },
]);
export default router;
