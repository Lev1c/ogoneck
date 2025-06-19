const { FeedBack } = require("../models/feetback");

class FeedBackController {
  async createFeedBack(req, res) {
    try {
      const { name, email, phone, typeFeed, typeWork, text } = req.body;

      const info = await FeedBack.create({
        name,
        email,
        phone,
        typeFeed,
        typeWork: 0,
        text,
      });

      return res.json(info);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Произошла ошибка" });
    }
  }

  async getAllFeedBack(req, res) {
    try {
      const info = await FeedBack.findAll();

      res.json(info);
    } catch (error) {
      console.error("Error fetching documents: ", error);
      res.status(500).json({ error: "Произошла ошибка" });
    }
  }

  async getFeedBackById(req, res) {
    try {
      const { id } = req.params;

      // Формируем запрос с использованием sortOrder
      const newsId = await FeedBack.findOne({ where: { id: id } });

      if (!newsId) {
        return res.status(400).json({ error: "Не существует" });
      }

      return res.json(newsId); // Возвращаем первый найденный документ
    } catch (error) {
      console.error("Error fetching document by sortOrder:", error);
      return res.status(500).json({ error: "Произошла ошибка" });
    }
  }

  async updateFeedBack(req, res) {
    try {
      const { id, typeWork } = req.body; // Получаем данные для обновления

      // Ссылка на документ в коллекции "news"
      const info = await FeedBack.findOne({ where: { id: id } });

      if (!info) {
        return res.status(400).json({ error: "Не существует" });
      }

      // Обновляем поля документа
      info.typeWork = typeWork;

      await info.save();

      return res.json({ message: "Info успешно обновлена", status: 200 });
    } catch (error) {
      console.error("Ошибка при обновлении новости:", error);
      return res
        .status(500)
        .json({ error: "Произошла ошибка при обновлении новости" });
    }
  }
}

module.exports = new FeedBackController();
