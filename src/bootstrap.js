import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import App from "./components/app";
import NavBar from "./components/navbar"
import Heros from "./components/pages/heros"


import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/heros">
          <Heros />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
