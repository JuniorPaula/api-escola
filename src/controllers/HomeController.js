/** criar class HomeControler que responder√° o router
 * com 'json'.
 */
class HomeControler {
  async index(req, res) {
    res.json('index');
  }
}

/** exportando a class ja instanciada */
export default new HomeControler();
