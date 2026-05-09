import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import ProfileDetails from "../pages/ProfileDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/timeline",
        Component: Timeline,
      },
      {
        path: "/profileDetails/:id",
        Component: ProfileDetails,
        loader: () => fetch('/data.json')
      },
    ],
  }, 
]);
