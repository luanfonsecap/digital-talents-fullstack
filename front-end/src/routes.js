import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import List from './Pages/List/List';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App}/>
        <Route path="/sensors" exact={true} component={List}/>
      </Switch>
    </BrowserRouter>
  );
}
