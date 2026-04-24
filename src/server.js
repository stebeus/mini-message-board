import { app } from './app.js';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from './constants.js';

const PORT = 3000;

app.use((_request, _response, next) => {
  next({ status: NOT_FOUND, message: 'Not found' });
});

app.use((error, _request, response, next) => {
  if (response.headersSent) return next(error);

  const statusCode = error.status ?? INTERNAL_SERVER_ERROR;

  console.error(error.stack);
  response.status(statusCode).render('error', { statusCode, error });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
