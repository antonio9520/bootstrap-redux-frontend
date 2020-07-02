import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Listado, NewProduct } from "../containers";

import { LISTADO, NEW_PRODUCT } from "./paths";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={LISTADO} component={Listado} />
      <Route path={NEW_PRODUCT} component={NewProduct} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
