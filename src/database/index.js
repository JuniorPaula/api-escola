/** importar o sequelize e as configurações da base de dados */
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

/** importar o model de alunos */
import Aluno from '../models/Aluno';

/** importando a model de usuarios */
import User from '../models/User';

/** importando a model de fotos */
import Foto from '../models/Foto';

/** criar o model de alunos */
const models = [Aluno, User, Foto];

/** iniciar a conexão instanciando o sequelize e passando a conexao */
const connection = new Sequelize(databaseConfig);

/** percorrer o array contendo os models */
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
