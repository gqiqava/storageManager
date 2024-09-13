import Authorization from "../pages/Authorization";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Buckets from "@/pages/Buckets";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Authorization />,
    // children: [
    //   {
    //     path: "criteria",
    //     element: <Criteria />,
    //   },
    //   {
    //     path: "stages",
    //     element: <Stages />,
    //   },
    //   {
    //     path: "Questionnaires",
    //     element: <Questionnaires />,
    //   },
    //   {
    //     path: "FollowUp",
    //     element: <FollowUp />,
    //   },
    //   {
    //     path: "",
    //     element: <Navigate to="stages" replace />,
    //   },
    // ],
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
        path: "",
        element: <Navigate to="/main/dashboard" replace />,
      },
    ],
  },
].map((route) => ({ ...route, path: route.path }));
