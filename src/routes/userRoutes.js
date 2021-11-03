/** importando o Router do express via destruct */
import { Router } from 'express';

/** importando a class userControllers ja instânciada */
import userController from '../controllers/UserController';

/** instanciando o Router */
const router = new Router();

/** rota responsável por criar um usuario através
 *  do método store do userControler */
router.post('/', userController.store);

export default router;
