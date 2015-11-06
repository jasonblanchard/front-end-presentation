import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from 'app/shared/routes';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import '../scss/site.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} routes={routes} />,
  document.getElementById('app')
);
