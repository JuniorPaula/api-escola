/** criar class UserControler que responderá o router
 * com 'json'.
 */

/** importando o model de usuario */
import User from '../models/User';

class UserControler {
  /** store -> medoto responssável por criar um usuário */
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  /** index -> método responsável por listar todos os usuário */
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  /** show -> método responsável por listar um usuário
     * com parametro id.
     */
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  /** update -> método responsável por atualizar um usuário */
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não existe!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      const userUpdated = await user.update(req.body);

      return res.json(userUpdated);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  /** delete -> método responsável por detelar um usuário */
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não existe!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      await user.destroy();

      return res.json(user);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

/** exportando a class ja instanciada */
export default new UserControler();
