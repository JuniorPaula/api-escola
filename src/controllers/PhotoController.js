/** criar class PhotoControler que responderá o router
 * com 'json'.
 */
import multer from 'multer';

/** importando as configurações do multer */
import multerConfig from '../config/multerConfig';

/** importando o model de foto */
import Foto from '../models/Foto';

const upload = multer(multerConfig).single('foto');

class PhotoControler {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe!'],
        });
      }
    });
  }
}

/** exportando a class ja instanciada */
export default new PhotoControler();
