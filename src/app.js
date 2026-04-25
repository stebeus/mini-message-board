import path from 'node:path';
import express from 'express';

import { error } from './routes/error.js';
import { index } from './routes/index.js';

export const app = express();

const dirname = import.meta.dirname;
const viewsPath = path.join(dirname, 'views');

app.locals.basedir = viewsPath;

app.set('views', viewsPath);
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', index);
app.use(error);
