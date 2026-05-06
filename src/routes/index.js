import { Router } from 'express';

import { getMessages } from '#root/controllers/index.js';

const router = Router();

router.get('/', getMessages);

export { router as index };
