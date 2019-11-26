import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from '../views/gallery';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Gallery} />
    </Switch>
  </BrowserRouter>
);