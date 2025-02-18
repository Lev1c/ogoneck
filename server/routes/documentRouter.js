const Router = require("express");
const router = new Router();
const documentContoller = require("../controllers/documentController");
const adminAuthMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const crypto = require('crypto');




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Папка для сохранения
    },
    filename: (req, file, cb) => {
      const uniqueId = crypto.randomBytes(8).toString('hex');
      const extension = file.originalname.split('.').pop();

      cb(null, `${uniqueId + "." + extension}`); // Уникальное имя файла
    },
  });

const upload = multer({ storage });

router.get('/document/:fileName', documentContoller.getDocumentName);


router.get('/document-get', documentContoller.getAllDocument);

router.post('/document-create', upload.single('file'), documentContoller.createDocument);

router.delete('/document-delete/:id', documentContoller.deleteDocument);

router.patch('/document-delete/:id', documentContoller.cnahgeNameDocument);

module.exports = router
