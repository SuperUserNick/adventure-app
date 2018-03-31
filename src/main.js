import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home/home'

const Main = () => (
  <main>
    <Switch>
    <Route path="/" component={Home} />
    </Switch>
  </main>
)

export default Main;
