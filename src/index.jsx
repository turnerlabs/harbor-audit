'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './app.jsx'
import View from './view.jsx'

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Declarative route configuration
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={View} />
      <Route path="/view1" component={View} />
    </Route>
  </Router>
), document.querySelector('#content'));
