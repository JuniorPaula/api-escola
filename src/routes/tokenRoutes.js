/** importando o Router do express via destruct */
import { Router } from 'express';

import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
