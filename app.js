/** importar o dotenv para usar as variáveis de ambiente */
import dotenv from 'dotenv';

dotenv.config();

/** importando a conexao */
import './src/database';

import express from 'express';

import { resolve } from 'path';

/** importando o homeRouter */
import homeRoutes from './src/routes/homeRoutes';

/** importando a rota user */
import userRoutes from './src/routes/userRoutes';

/** importando a rota de token */
import tokenRoutes from './src/routes/tokenRoutes';

/** importando a rota de alunos */
import alunoRoutes from './src/routes/alunoRoutes';

/** importando a rota de cadastro das imagens */
import photoRoutes from './src/routes/photoRoutes';

/** Class resposssável por instancia o App/express */
class App {
  /** assim que a class for instaciada, o construtor vai fazer
   *  o app ultilzar o express. */
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  /** método responssável por setar express.urlenconder  e express.json() */
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  /** método responssável por chamar as rotas */
  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', photoRoutes);
  }
}

/** exportar a class já instanciada, que na verdade é express */
export default new App().app;
