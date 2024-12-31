const Router = require('express')
const router = new Router()
const documentContoller = require('../controllers/documentController');
const adminAuthMiddleware = require('../middleware/authMiddleware');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Папка для сохранения
    },
    filename: (req, file, cb) => {
      cb(null, `${file.originalname}`); // Уникальное имя файла
    },
  });

const upload = multer({ storage });

router.get('/document-get', documentContoller.getAllDocument);

router.get('/document/:fileName', documentContoller.getDocumentName);

router.post('/document-create', upload.single('file'), documentContoller.createDocument);

router.delete('/document-delete/:id', documentContoller.deleteInfo);

module.exports = router