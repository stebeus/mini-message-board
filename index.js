import path from 'node:path';
import express from 'express';
import { toCamelCase } from './utils/formatters.js';

// Server setup

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

// View engine setup

const dirname = import.meta.dirname;
const assetsPath = path.join(dirname, 'public');

app.set('view engine', 'pug');
app.use(express.static(assetsPath));

// Data

const formattedDate = [
  'en-US',
  { day: 'numeric', month: 'long', year: 'numeric' },
];

const messages = [
  {
    user: 'john_doe',
    date: new Date().toLocaleDateString(...formattedDate),
    text: "I'm going to hack the user below me.",
  },
  {
    user: '01101100',
    date: new Date().toLocaleDateString(...formattedDate),
    text: '00110011000111',
  },
];

// Routes

app.get('/', (request, response) => {
  response.render('index', {
    moduleImports: { toCamelCase },
    title: 'Mini Message Board',
    messages: messages,
  });
});

app.get('/{*splat}', (request, response) => {
  const notFoundStatus = 404;
  response.status(notFoundStatus).render('error');
});

// Server startup

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${PORT}`);
});
