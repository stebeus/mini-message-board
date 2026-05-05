import { Router } from 'express';

import { getMessages } from '#root/controllers/message.js';

const router = Router();

router.get('/', getMessages);

export { router as index };
