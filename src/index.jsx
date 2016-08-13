'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './app.jsx'
import View from './view.jsx'

// Needed for onTouchTap
injectTapEventPlugin();

// Declarative route configuration
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={View} />
      <Route path="/view" component={View} />
    </Route>
  </Router>
), document.querySelector('#content'));
