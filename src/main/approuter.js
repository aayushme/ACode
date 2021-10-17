import React from "react";
import Login from "./components/login/login";
import MainLayout from "./components/mainlayout/mainlayout";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {

  return (

    <Router>
      <Switch>
        <div className="AppRouter">
          <Route path="/" exact component={Login} />
          <Route path="/main" exact component={MainLayout} />
        </div>
      </Switch>
    </Router>
  );
}


export default AppRouter;
