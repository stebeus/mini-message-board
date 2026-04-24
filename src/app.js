import express from 'express';

import { ASSETS_PATH, VIEWS_PATH } from './constants.js';

export const app = express();

// Setup

app.use(express.static(ASSETS_PATH));
app.locals.basedir = VIEWS_PATH;

app.set('views', VIEWS_PATH);
app.set('view engine', 'pug');

// Model

function createMessage(username, content) {
  const formattedDateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const state = {
    username: String(username),
    content: String(content),
    date: new Date().toLocaleDateString('en-US', formattedDateOptions),
  };

  return { ...state };
}

const messages = [
  createMessage('John Doe', 'I will hack all users below my post...'),
  createMessage('00110101', '1110011010'),
];

// Routes

app.get('/', (_request, response) => {
  response.render('index');
});
