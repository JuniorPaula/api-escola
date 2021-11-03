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
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

/** exportando a class ja instanciada */
export default new UserControler();
