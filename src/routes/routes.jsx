import Authorization from "../pages/Authorization";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Buckets from "@/pages/Buckets";
import Profile from "@/pages/Profile";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Authorization />,
  },
  {
    path: "/main",
    element: <Landing />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "buckets",
        element: <Buckets />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "",
        element: <Navigate to="/main/dashboard" replace />,
      },
    ],
  },
].map((route) => ({ ...route, path: route.path }));
