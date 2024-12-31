const { News } = require('../models/news');

class NewsController {

    async createNews(req, res) {
        try {

        const { name, text, img, dop_text, visible } = req.body;

        // Создаем новый документ в коллекции "news"
        const newNews = await News.create({
            name,
            text, 
            img, 
            dop_text,
            visible
        });

        return res.json(newNews);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Произошла ошибка' });
    }
    }
    
    async getAllNewsAdmin(req, res) {
        try {
            const news = await News.findAll({
                order: [
                    ['id', 'DESC']
                ],
            });

            res.json(news);
        } catch (error) {
            console.error("Error fetching documents: ", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async getAllNews(req, res) {
        try {
            const news = await News.findAll({
                order: [
                    ['id', 'DESC']
                ],
                where: {visible: true}
            });

            res.json(news);
        } catch (error) {
            console.error("Error fetching documents: ", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async getNewsById(req, res) {
        try {
            const { id } = req.params;

            // Формируем запрос с использованием sortOrder
            const newsId = await News.findOne({ where: { id: id } });
            
            if (!newsId) {
                return res.status(400).json({ error: 'Не существует' });
            }

            return res.json(newsId); // Возвращаем первый найденный документ
        } catch (error) {
            console.error('Error fetching document by sortOrder:', error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async deleteNews(req, res) {
        try {
            const { id } = req.params; // Получаем id документа из параметров маршрута

            const newsId = await News.findOne({ where: { id: id } });
            
            if (!newsId) {
                return res.status(400).json({ error: 'Не существует' });
            }

            // Удаляем документ
            await newsId.destroy();

            return res.json({ message: 'Новость успешно удалена', status: 200});
        } catch (error) {
            console.error('Ошибка при удалении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при удалении новости' });
        }
    }

    async updateNews(req, res) {
        try {
            const { id, name, text, img, dop_text, visible } = req.body; // Получаем данные для обновления

            // Ссылка на документ в коллекции "news"
            const news = await News.findOne({ where: { id: id } });

            if (!news) {
                return res.status(400).json({ error: 'Не существует' });
            }

            // Обновляем поля документа
            news.name = name;
            news.text = text;
            news.img = img;
            news.dop_text = dop_text;
            news.visible = visible;

            await news.save();

            return res.json({ message: 'Новость успешно обновлена',news, status: 200 });
        } catch (error) {
            console.error('Ошибка при обновлении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при обновлении новости' });
        }
    }

}

module.exports = new NewsController()
