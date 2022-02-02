import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Animal from './views/Animal/Animal';
import AnimalDetail from './views/AnimalDetail/AnimalDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Animal />
        </Route>
        <Route path="/animal/:id">
          <AnimalDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
