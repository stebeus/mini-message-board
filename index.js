import path from 'node:path';
import express from 'express';

const app = express();
const PORT = 3000;

// View engine setup

const dirname = import.meta.dirname;
const assetsPath = path.join(dirname, 'public');

app.set('view engine', 'pug');
app.use(express.static(assetsPath));

// Routes

app.get('/', (request, response) => {
  response.render('index', { title: 'Mini Message Board' });
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
