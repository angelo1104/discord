// import "./App.css";
import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Image from "next/image"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">hello jan afk</Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <Image src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
