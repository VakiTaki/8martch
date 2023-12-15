import { Navigate } from "react-router-dom"
import config from "./config.json";
import Main from "./layouts/main";


export const routes = [
  {
    path: `${config.subFolder}/`,
    element: <Main />,
    display: true,
    index: true,
    title: "С Новым годом",
  },
  {
    path: "*",
    element: <Navigate to={`${config.subFolder}/`} />,
  },
]
