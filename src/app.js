import path from 'node:path';
import express from 'express';

export const app = express();

const dirname = import.meta.dirname;

const assetsPath = path.join(dirname, 'public');
const viewsPath = path.join(dirname, 'views');

app.use(express.static(assetsPath));
app.locals.basedir = viewsPath;

app.set('views', viewsPath);
app.set('view engine', 'pug');

app.get('/', (_request, response) => {
  response.render('index');
});
