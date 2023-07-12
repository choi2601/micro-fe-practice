import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  // create generate a specific prefix name for resolce conflit css classname
  productionPrefix: "ma",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
