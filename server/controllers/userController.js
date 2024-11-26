const admin = require("firebase-admin");
const { addDoc, collection, getDocs, query, where } = require('firebase/firestore');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {

    async register(req, res) {
        try {
            const db = admin.firestore();
            const { name, password } = req.body;

            const userSnapshot = await getDocs(
            query(collection(db, 'users'), where('name', '==', name))
            );
        
            if (!userSnapshot.empty) {
                return res.status(400).json({ error: 'Пользователь с таким именем уже существует' });
            }

            // Хэшируем пароль перед сохранением
            const hashedPassword = await bcrypt.hash(password, 10);

            // Создаем нового пользователя в Firestore
            const docRef = await addDoc(collection(db, 'users'), {
                name,
                password: hashedPassword,
                isAdmin: false
            });

            // Отправляем ответ о успешной регистрации
            return res.json({ message: 'Пользователь успешно зарегистрирован', id: docRef.id });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка при регистрации' });
        }
    }

    // Авторизация пользователя
    async login(req, res) {
        try {
        const db = admin.firestore();
        const { name, password } = req.body;

        // Получение пользователя из базы
        const userSnapshot = await getDocs(query(collection(db, 'users'), where('name', '==', name)));
        const user = userSnapshot.docs[0]?.data();

        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        // Проверка пароля
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Неверный пароль' });
        }

        // Генерация JWT токена с флагом isAdmin
        const token = jwt.sign(
            { id: userSnapshot.docs[0].id, name: user.name, isAdmin: user.isAdmin || false },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({ token });
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
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return res.json({ message: 'Доступ разрешен', user: decoded });
        } catch (error) {
            console.error(error);
            return res.status(401).json({ error: 'Неверный или истекший токен' });
        }
    }
    
}

module.exports = new UserController()
