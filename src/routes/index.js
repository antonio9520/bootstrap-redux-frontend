import React from "react";
import { Route, Switch } from "react-router-dom";

import { Listado, NewProduct, EditProduct } from "../containers";

import { LISTADO, NEW_PRODUCT, EDIT_PRODUCT } from "./paths";

const Routes = () => (
  <Switch>
    <Route exact path={LISTADO} component={Listado} />
    <Route path={NEW_PRODUCT} component={NewProduct} />
    <Route path={EDIT_PRODUCT} component={EditProduct} />
  </Switch>
);

export default Routes;
