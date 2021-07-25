import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RoutesList from "./Routes/RoutesList";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import PageNotFound from "./Components/404/404";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {RoutesList.map((route, i) => (
            <Route path={route.path} key={i}>
              {route.component}
            </Route>
          ))}
          <Route exact path="/app/hello">
            hello jan afk
          </Route>
          <Route exact path="/app">
            hell
          </Route>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
