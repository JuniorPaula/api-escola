/** importar o sequelize e o model pra criar a class de alunos */
import Sequelize, { Model } from 'sequelize';

/** exportar a class aluno que extend model */
export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
