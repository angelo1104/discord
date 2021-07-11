import React from "react";
import { URL_CHAT } from "./Routes";
import App from "../Components/App/App";

interface Route {
  path: string;
  component: JSX.Element;
}

const RoutesList: Route[] = [
  {
    path: URL_CHAT,
    component: <App />,
  },
];

export default RoutesList;
