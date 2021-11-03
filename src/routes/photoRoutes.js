/** importando o Router do express via destruct */
import { Router } from 'express';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', photoController.store);

export default router;
