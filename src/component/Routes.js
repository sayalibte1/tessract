import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import developer from "../component/developer";
import career from "../component/career";
import experiences from "../component/experiences"
import jioglass from "../component/jioglass";

export default function AppRoutes() {
  return (
    <div>
      <Route exact path="/developer" component={developer} />
      <Route exact path="/career" component={career} />
      <Route exact path="/jioglass" component={jioglass} />
      <Route exact path="/experiences" component={experiences} />
    </div>
  );
}


