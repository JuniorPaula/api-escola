/** criar class AlunoControler que responderá o router
 * com 'json'.
 */

import Aluno from '../models/Aluno';

class AlunoControler {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

/** exportando a class ja instanciada */
export default new AlunoControler();
