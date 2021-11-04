"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/** importando o Router do express via destruct */
var _express = require('express');

var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);

/** importando o middleware de login */
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

/** index -> rota responsável por lista todos os usuários */
router.get('/', _AlunoController2.default.index);

/** store -> rota responsável por criar usuários */
router.post('/', _loginRequired2.default, _AlunoController2.default.store);

/** update -> rota responsável por atualizar um usuário com base no ID */
router.put('/:id', _loginRequired2.default, _AlunoController2.default.update);

/** show -> rota responsável por mostrar um usuário com base no ID */
router.get('/:id', _AlunoController2.default.show);

/** delete -> rota responsável por deletar um usuário com base no ID */
router.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;
