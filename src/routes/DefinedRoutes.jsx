import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layout/basic.layout";
import { PATH } from "../constants/path";
import Movies from "../pages/Movies";
import Login from "../pages/Login";
// import Login from "../features/login/Login";

import MyMap from "../features/map/Map";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <ProtectedRoute>
        <BasicLayout />
      </ProtectedRoute>
    ),

    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: PATH.MOVIES,
        element: <Movies />,
      },
      {
        path: PATH.MAP,
        element: <MyMap />,
      },
      {
        path: "child",
        element: <p>child here</p>,
      },
    ],
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
]);
function DefinedRoutes() {
  return <RouterProvider router={router} />;
}

export default DefinedRoutes;
