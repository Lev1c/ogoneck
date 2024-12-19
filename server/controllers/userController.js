const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const config = require('../config');

class UserController {

    async register(req, res) {
        try {
            
            const { name, password } = req.body;

            if (!name && !password) {
                return res.status(400).json({ error: 'Поля пусты' });
            }

            const checkName = await User.findOne({ where: { name: name } });
            
            if (checkName) {
                return res.status(400).json({ error: 'Указанный существует' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await User.create({
                name,
                password: hashedPassword,
                role: 0,
            });
        

            // Отправляем ответ о успешной регистрации
            return res.json({ message: 'Пользователь успешно зарегистрирован'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка при регистрации' });
        }
    }

    // Авторизация пользователя
    async login(req, res) {
        try {
        
        const { name, password } = req.body;

        // Получение пользователя из базы
        const users = await User.findOne({ where: { name: name } });
        if (!users) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        // Проверка пароля
        const isPasswordValid = await bcrypt.compare(password, users.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Неверный пароль' });
        }

        // Генерация JWT токена
        const token = jwt.sign(
            { id: users.id, name: users.name, role: users.role || 0 },
            config.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({ token, users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Произошла ошибка при авторизации' });
    }
    }

    // Защищенный маршрут (требует авторизации)
    async protectedRoute(req, res) {
        try {
            const token = req.headers.authorization?.split(' ')[1]; // Получаем токен из заголовков

            if (!token) {
                return res.status(401).json({ error: 'Токен не найден' });
            }

            // Проверяем токен
            const decoded = jwt.verify(token, config.SECRET_KEY);
            return res.json({ message: 'Доступ разрешен', user: decoded });
        } catch (error) {
            console.error(error);
            return res.status(401).json({ error: 'Неверный или истекший токен' });
        }
    }
    
}

module.exports = new UserController()
