import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './containers/App';
import Home from './routes/Home';
import GettingStarted from './routes/GettingStarted';

import './styles/styles.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="getting-started" component={GettingStarted} />
    </Route>
  </Router>
), document.getElementById('app'));
