import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Destination from "../pages/destinations/[id]";
import { Destinations } from "./components/Home/Destionations";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/destionations/:id" component={Destination} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
