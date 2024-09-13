import Authorization from "../pages/Authorization";
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
  // {
  //   path: "/test",
  //   element: <Test />,
  // },
].map((route) => ({ ...route, path: route.path }));
