"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/** importando o Router do express via destruct */
var _express = require('express');

/** importando a class userControllers ja instânciada */
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

/** importando o middleware de token */
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

/** instanciando o Router */
const router = new (0, _express.Router)();

/** rota responsável por criar um usuario através
 *  do método store do userControler */
router.post('/', _loginRequired2.default, _UserController2.default.store);

/** rota responsável por listar todos os usuários */
// router.get('/', userController.index);

/** rota responsável por listar um usuários
 * -> recebe parametro id
 */
// router.get('/:id', userController.show);

/** rota responsável por atualizar um usuário
 * -> recebe parametro id
 */
router.put('/', _loginRequired2.default, _UserController2.default.update);

/** rota responsável por deletar um usuário */
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;
