import React from "react";
import { Route, Switch } from "react-router-dom";

import { Listado, NewProduct } from "../containers";

import { LISTADO, NEW_PRODUCT } from "./paths";

const Routes = () => (
  <Switch>
    <Route exact path={LISTADO} component={Listado} />
    <Route path={NEW_PRODUCT} component={NewProduct} />
  </Switch>
);

export default Routes;
