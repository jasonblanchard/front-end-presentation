/* eslint-disable no-console */

import 'babel/polyfill';
import env from '../../env.json';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyParser from 'body-parser';
const config = env[process.env.NODE_ENV || 'development'];
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/*', (req, res) => {
  res.render('index', {
    scriptSource: config.SCRIPT_SOURCE,
  });
});

console.log(`listening on port ${PORT}`);
app.listen(PORT);
