/** criar class HomeControler que responderá o router
 * com 'json'.
 */
class HomeControler {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

/** exportando a class ja instanciada */
export default new HomeControler();
