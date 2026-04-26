import { Router } from 'express';

const router = Router();

router.use((request, response, next) => {
  const notFoundError = new Error('Not Found');
  notFoundError.status = 404;
  next(notFoundError);
});

router.use((error, request, response, next) => {
  if (response.headersSent) return next(error);

  const status = error.status ?? 500;
  const pageTitle = `${status} ${error.message}`;

  console.log(error.stack);
  response.status(status).render('error', { pageTitle, status, error });
});

export { router as error };
