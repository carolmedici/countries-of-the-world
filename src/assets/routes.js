
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cards from "./assets/Countries/Cards";
import HomePage from "./assets/Homepage"

export default function Routes(){
return (
<BrowserRouter>
<Switch>
<Route path="/" exact component={HomePage}/>
<Route path="/cards" component={Cards}/>
</Switch>
</BrowserRouter>
);
}