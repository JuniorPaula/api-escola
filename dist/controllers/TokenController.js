"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

/** class resposável por gerar os tokens */
class TokenControler {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      res.status(401).json({
        errors: ['Credênciais inválidas!'],
      });
    }

    const user = await _User2.default.findOne({ where: { email } });

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
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

/** exportando a class ja instanciada */
exports. default = new TokenControler();
