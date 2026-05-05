import { Router } from 'express';

import { getNewMessage, postNewMessage } from '#root/controllers/new-message.js';

const router = Router();

router.get('/new-message', getNewMessage);
router.post('/new-message', postNewMessage);

export { router as newMessage };
