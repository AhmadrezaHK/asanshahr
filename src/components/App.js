import React from 'react';
import 'antd/dist/antd.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import List from './List';
import Login from './Login';
import View from './View';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/List/View' component={View} />
          <Route path='/List' component={List} />
          <Route path='/' component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
