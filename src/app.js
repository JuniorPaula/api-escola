/** importar o dotenv para usar as variáveis de ambiente */
import dotenv from 'dotenv';

dotenv.config();

/** importando a conexao */
import './database';

/** importar o express */
import express from 'express';

/** importar o cors para política de header */
import cors from 'cors';
import helmet from 'helmet';

import { resolve } from 'path';

/** importando o homeRouter */
import homeRoutes from './routes/homeRoutes';

/** importando a rota user */
import userRoutes from './routes/userRoutes';

/** importando a rota de token */
import tokenRoutes from './routes/tokenRoutes';

/** importando a rota de alunos */
import alunoRoutes from './routes/alunoRoutes';

/** importando a rota de cadastro das imagens */
import photoRoutes from './routes/photoRoutes';

/** dominios liberador pelos cors */
const whiteList = [
  'https://escola.luckwebdeveloper.tech',
  'http://localhost:3000',
];

/** configurações do cors */
const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  },
};

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
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
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
