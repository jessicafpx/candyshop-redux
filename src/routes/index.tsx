import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import ShoppingCart from '../pages/ShoppingCart';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/shoppingcart" component={ShoppingCart} />
  </Switch>
);

export default Routes;
