"use strict";Object.defineProperty(exports, "__esModule", {value: true});/** criar class HomeControler que responder√° o router
 * com 'json'.
 */
class HomeControler {
  async index(req, res) {
    res.json('index');
  }
}

/** exportando a class ja instanciada */
exports. default = new HomeControler();
