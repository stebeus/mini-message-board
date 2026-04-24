import express from 'express';

import { ASSETS_PATH, VIEWS_PATH } from './constants.js';

export const app = express();

// Setup

app.use(express.static(ASSETS_PATH));
app.locals.basedir = VIEWS_PATH;

app.set('views', VIEWS_PATH);
app.set('view engine', 'pug');

// Routes

app.get('/', (_request, response) => {
  response.render('index');
});
