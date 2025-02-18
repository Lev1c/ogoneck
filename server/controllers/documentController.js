const { Document } = require('../models/document');
const fs = require('fs');
const path = require('path');

class DocumentController {

    async createDocument(req, res) {
        try {
            const { name } = req.body;

            const file = req.file;
            console.log(file)
            if (!file) {
              return res.status(400).json({ error: 'Файл не загружен' });
            }
            
            const doc = await Document.create({
                name,
                fileName: file.filename, // Имя файла
                filePath: file.path, 
            });

            return res.json(doc);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    }
    
    async getAllDocument(req, res) {
        try {
            const info = await Document.findAll({
                order: [
                    ['id', 'DESC']
                ],
            });

            res.json(info);
        } catch (error) {
            console.error("Error fetching documents: ", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async getDocumentName(req, res) {
        try {
            const { fileName } = req.params;
            const filePath = path.resolve(__dirname, '../uploads', fileName); // Убедитесь, что путь верный
    
            if (!fs.existsSync(filePath)) {
                console.error('Файл не найден:', fileName);
                return res.status(404).json({ error: 'Файл не найден' });
            }
    
            res.sendFile(filePath); // Отправка файла клиенту
        } catch (error) {
            console.error("Ошибка при отправке файла:", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async deleteDocument(req, res) {
        try {
            const { id } = req.params; // Получаем id документа из параметров маршрута

            const infoId = await Document.findOne({ where: { id: id } });
            
            if (!infoId) {
                return res.status(400).json({ error: 'Не существует' });
            }

            // Удаляем документ
            await infoId.destroy();

            return res.json({ message: 'Новость успешно удалена', infoId, status: 200});
        } catch (error) {
            console.error('Ошибка при удалении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при удалении новости' });
        }
    }

    async cnahgeNameDocument(req, res) {
        try {
            const { id, name } = req.body; // Получаем id документа из параметров маршрута

            const infoId = await Document.findOne({ where: { id: id } });
            
            if (!infoId) {
                return res.status(400).json({ error: 'Не существует' });
            }

            // Удаляем документ
            infoId.name = name;

            await infoId.save();

            return res.json({ message: 'Doc успешно обновлена', status: 200 });
        } catch (error) {
            console.error('Ошибка при удалении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при удалении новости' });
        }
    }

}

module.exports = new DocumentController()
