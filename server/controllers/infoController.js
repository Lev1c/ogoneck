const { Info } = require('../models/info');


class InfoController {

    async createInfo(req, res) {
        try {
            const { name, text, visible } = req.body;
            
            const info = await Info.create({
                name,
                text,
                visible
            });

            return res.json(info);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    }
    
    async getAllInfo(req, res) {
        try {
            const info = await Info.findAll({where: {visible: true}});

            res.json(info);
        } catch (error) {
            console.error("Error fetching documents: ", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async getAllInfoAdmin(req, res) {
        try {
            const news = await Info.findAll();

            res.json(news);
        } catch (error) {
            console.error("Error fetching documents: ", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async getInfoById(req, res) {
        try {
            const { id } = req.params;

            // Формируем запрос с использованием sortOrder
            const newsId = await Info.findOne({ where: { id: id } });
            
            if (!newsId) {
                return res.status(400).json({ error: 'Не существует' });
            }

            return res.json(newsId); // Возвращаем первый найденный документ
        } catch (error) {
            console.error('Error fetching document by sortOrder:', error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    
    }

    async deleteInfo(req, res) {
        try {
            const { id } = req.params; // Получаем id документа из параметров маршрута

            const infoId = await Info.findOne({ where: { id: id } });
            
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

    async updateInfo(req, res) {
        try {
            const { id, name, text, visible } = req.body; // Получаем данные для обновления

            // Ссылка на документ в коллекции "news"
            const info = await Info.findOne({ where: { id: id } });

            if (!info) {
                return res.status(400).json({ error: 'Не существует' });
            }

            // Обновляем поля документа
            info.name = name;
            info.text = text;
            info.visible = visible;

            await info.save();

            return res.json({ message: 'Info успешно обновлена', status: 200 });
        } catch (error) {
            console.error('Ошибка при обновлении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при обновлении новости' });
        }
    }
    

}

module.exports = new InfoController()
