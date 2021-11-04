"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/** importar o sequelize e as configurações da base de dados */
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

/** importar o model de alunos */
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

/** importando a model de usuarios */
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

/** importando a model de fotos */
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

/** criar o model de alunos */
const models = [_Aluno2.default, _User2.default, _Foto2.default];

/** iniciar a conexão instanciando o sequelize e passando a conexao */
const connection = new (0, _sequelize2.default)(_database2.default);

/** percorrer o array contendo os models */
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
