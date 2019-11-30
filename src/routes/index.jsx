import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Gallery from '../views/gallery';
import Page404 from '../views/page404';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Gallery} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);