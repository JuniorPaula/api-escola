import express from 'express';

/** importando o homeRouter */
import homeRouter from './src/routes/homeRoutes';

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
  }

  /** método responssável por chamar as rotas */
  routes() {
    this.app.use('/', homeRouter);
  }
}

/** exportar a class já instanciada, que na verdade é express */
export default new App().app;
