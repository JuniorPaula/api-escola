/** importando o Router do express via destruct */
import { Router } from 'express';

import alunoController from '../controllers/AlunoController';

/** importando o middleware de login */
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

/** index -> rota responsável por lista todos os usuários */
router.get('/', alunoController.index);

/** store -> rota responsável por criar usuários */
router.post('/', loginRequired, alunoController.store);

/** update -> rota responsável por atualizar um usuário com base no ID */
router.put('/:id', loginRequired, alunoController.update);

/** show -> rota responsável por mostrar um usuário com base no ID */
router.get('/:id', alunoController.show);

/** delete -> rota responsável por deletar um usuário com base no ID */
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
