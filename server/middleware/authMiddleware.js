const jwt = require("jsonwebtoken");

const adminAuthMiddleware = (req, res, next) => {
    try {
        // Получение токена из заголовков
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Нет токена, доступ запрещен" });
        }

        // Расшифровка токена
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // Проверка флага isAdmin
        if (decoded.role !== 1) {
            return res.status(403).json({ error: "Нет прав доступа" });
        }

        // Если все проверки прошли, добавляем данные пользователя в запрос
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Ошибка проверки токена:", error);
        res.status(403).json({ error: "Недействительный токен" });
    }
};

module.exports = adminAuthMiddleware;