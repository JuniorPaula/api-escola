import jwt from 'jsonwebtoken';
import User from '../models/User';

/** class resposável por gerar os tokens */
class TokenControler {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      res.status(401).json({
        errors: ['Credênciais inválidas!'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({
        errors: ['Usuário não existe!'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      res.status(401).json({
        errors: ['Senha inválida!'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

/** exportando a class ja instanciada */
export default new TokenControler();
