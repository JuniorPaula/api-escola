/** criar class PhotoControler que responderá o router
 * com 'json'.
 */
import multer from 'multer';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('foto');

class PhotoControler {
  async store(req, res) {
    return upload(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      return res.json(req.file);
    });
  }
}

/** exportando a class ja instanciada */
export default new PhotoControler();
