import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import Detail from "../views/Detail/Detail";
import Home from "../views/Home/Home";
import Error404 from "../views/Error404/Error404";
import Profile from "../views/Profile/Profile";
import LikedEvents from "../views/Profile/components/likedEvents/LikedEvents";
import MyInfo from "../views/Profile/components/myinfo/MyInfo";
import Loading from "../components/Loading/Loading";

//********************** Routes *********************/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/detail/:eventId",
    element:
    <Suspense fallback={<Loading />}>
     

      <Detail />,
     
    </Suspense>
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const MyRoutes = () => <RouterProvider router={router} />;

export default MyRoutes;
