/** importando o Router do express via destruct */
import { Router } from 'express';

import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
