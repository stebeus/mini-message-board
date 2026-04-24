import { app } from './app.js';
import { INTERNAL_SERVER_ERROR } from './constants.js';

const PORT = 3000;

app.use((error, _request, response, next) => {
  if (response.headersSent) return next(error);

  const statusCode = error.status ?? INTERNAL_SERVER_ERROR;

  console.error(error.stack);
  response.status(statusCode).render('error', { statusCode, error });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
