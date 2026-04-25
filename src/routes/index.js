import { Router } from 'express';

import { formatToKebabCase } from '#root/utils/formatters.js';

const router = Router();

const createMessage = (username, content) =>
  Object.freeze({
    username,
    content,
    date: new Date(),
    id: crypto.randomUUID(),
  });

const messages = [
  createMessage('John Doe', "I'm gonna hack all users below me..."),
];

router.get('/', (request, response) => {
  response.render('index', {
    require: { formatToKebabCase },
    messages,
  });
});

router.post('/new-message', ({ body: { username, message } }, response) => {
  const newMessage = createMessage(username, message);
  messages.push(newMessage);
  response.redirect('/');
});

export { router as index };
