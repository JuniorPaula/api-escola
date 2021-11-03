/** importando o Router do express via destruct */
import { Router } from 'express';

/** importando a class userControllers ja instânciada */
import userController from '../controllers/UserController';

/** instanciando o Router */
const router = new Router();

/** rota responsável por criar um usuario através
 *  do método store do userControler */
router.post('/', userController.store);

/** rota responsável por listar todos os usuários */
router.get('/', userController.index);

/** rota responsável por listar um usuários
 * -> recebe parametro id
 */
router.get('/:id', userController.show);

/** rota responsável por atualizar um usuário
 * -> recebe parametro id
 */
router.put('/:id', userController.update);

/** rota responsável por deletar um usuário */
router.delete('/:id', userController.delete);

export default router;
