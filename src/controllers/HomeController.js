/** criar class HomeControler que responderá o router
 * com 'json'.
 */

import Aluno from '../models/Aluno';

class HomeControler {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Santos',
      email: 'm_santos@gmail.com',
      idade: 27,
      peso: 53,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

/** exportando a class ja instanciada */
export default new HomeControler();
