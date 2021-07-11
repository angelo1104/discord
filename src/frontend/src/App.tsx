import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutesList from "./Routes/RoutesList";

function App() {
  return (
    <Router>
      <Switch>
        {RoutesList.map((route, i) => (
          <Route path={route.path} key={i}>
            {route.component}
          </Route>
        ))}
        <Route path="/app/hello">hello jan afk</Route>
        <Route path="/">hell</Route>
      </Switch>
    </Router>
  );
}

export default App;
