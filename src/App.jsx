import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import CharacterView from './views/CharacterView/CharacterView';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:id">
          <CharacterView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
