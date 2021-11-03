/** criar class PhotoControler que responderá o router
 * com 'json'.
 */
class PhotoControler {
  async store(req, res) {
    res.json(req.file);
  }
}

/** exportando a class ja instanciada */
export default new PhotoControler();
