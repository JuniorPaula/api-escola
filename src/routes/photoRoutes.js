/** importando o Router do express via destruct */
import { Router } from 'express';

import photoController from '../controllers/PhotoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
