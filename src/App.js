import './App.scss';
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './views/Home.js';
import Product from './views/Product.js';

function App() {
  return (
    <BrowserRouter>

      <Switch>

        <Route path="/">
          <Home/>
        </Route>

        <Route path="/product">
          <Product/>
        </Route>

      </Switch>

    </BrowserRouter>
  );
}

export default App;
