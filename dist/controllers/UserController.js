"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/** criar class UserControler que responderá o router
 * com 'json'.
 */

/** importando o model de usuario */
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserControler {
  /** store -> medoto responssável por criar um usuário */
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  /** index -> método responsável por listar todos os usuário */
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
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
      const user = await _User2.default.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  /** update -> método responsável por atualizar um usuário */
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      const userUpdated = await user.update(req.body);

      const { id, nome, email } = userUpdated;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  /** delete -> método responsável por detelar um usuário */
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }
      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

/** exportando a class ja instanciada */
exports. default = new UserControler();
