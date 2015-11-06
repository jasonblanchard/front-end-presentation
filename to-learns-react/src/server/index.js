/* eslint-disable no-console */

import 'babel/polyfill';
import env from '../../env.json';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from 'app/shared/routes';
import createLocation from 'history/lib/createLocation';
import { RoutingContext, match } from 'react-router';

const config = env[process.env.NODE_ENV || 'development'];
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  const location = createLocation(req.url);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500).send(error.message);
    } else if (renderProps === null) {
      res.status(404).send('Not found');
    } else {
      const markup = ReactDOMServer.renderToString(
        <RoutingContext {...renderProps}/>
      );

      res.render('index', {
        markup: markup,
        scriptSource: config.SCRIPT_SOURCE,
      });
    }
  });
});

console.log(`listening on port ${PORT}`);
app.listen(PORT);
