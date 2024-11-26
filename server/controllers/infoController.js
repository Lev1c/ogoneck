const { db } = require('../firebase');
const { collection, addDoc, updateDoc, doc, query, orderBy, getDocs, where, deleteDoc  } = require("firebase/firestore");


class InfoController {

    async createInfo(req, res) {
        try {
            const { name, text } = req.body;

        

            // Получаем документы, отсортированные по полю sortOrder
            const q = query(collection(db, 'info'), orderBy('sortOrder', 'desc'));
            const snapshot = await getDocs(q);
            
            // Устанавливаем sortOrder в зависимости от последнего документа
            let sortOrder = 1;  // Если коллекция пуста, sortOrder будет равен 1
            if (!snapshot.empty) {
                const lastDoc = snapshot.docs[0];
                sortOrder = lastDoc.data().sortOrder + 1;
            }

            // Создаем новый документ в коллекции "info"
            const docRef = await addDoc(collection(db, 'info'), {
                name,
                text,
                sortOrder  // Присваиваем числовое значение sortOrder
            });

            // Возвращаем результат с числовым sortOrder
            return res.json({
                id: docRef.id,
                name,
                text,
                sortOrder,
                status: 200,
                message: "успешно"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    }
    
    async getAllInfo(req, res) {
        try {
            // Формируем запрос с сортировкой по полю sortOrder в порядке возрастания
            const q = query(collection(db, "info"), orderBy("sortOrder", "asc"));
            const querySnapshot = await getDocs(q);

            const infos = [];

            querySnapshot.forEach((doc) => {
                // Собираем данные из документа в массив, включая id
                infos.push({ id: doc.id, ...doc.data() });
            });

            // Возвращаем отсортированный массив объектов
            res.json(infos);
        } catch (error) {
            console.error("Error fetching documents: ", error);
            res.status(500).json({ error: 'Произошла ошибка' });
        }
    }

    async getInfoById(req, res) {
        try {
            const { sortOrder } = req.query;

            // Формируем запрос с использованием sortOrder
            const q = query(
                collection(db, 'info'), 
                where('sortOrder', '==', Number(sortOrder))
            );

            // Выполняем запрос
            const querySnapshot = await getDocs(q);

            // Проверяем, есть ли данные
            if (querySnapshot.empty) {
                
                return res.status(404).json({ error: 'Документ с таким sortOrder не найден', class: 'notFound', querySnapshot });
            }

            // Извлекаем данные
            const info = [];
            querySnapshot.forEach((doc) => {
                info.push({ id: doc.id, ...doc.data() });
            });

            return res.json(info[0]); // Возвращаем первый найденный документ
        } catch (error) {
            console.error('Error fetching document by sortOrder:', error);
            return res.status(500).json({ error: 'Произошла ошибка' });
        }
    
    }

    async deleteInfo(req, res) {
        try {
            const { id } = req.body; // Получаем id документа из параметров маршрута

            // Ссылка на документ в коллекции "news"
            const newsDocRef = doc(db, 'info', id);

            // Удаляем документ
            await deleteDoc(newsDocRef);

            return res.json({ message: 'info успешно удалена', id, status: 200 });
        } catch (error) {
            console.error('Ошибка при удалении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при удалении новости' });
        }
    }

    async updateInfo(req, res) {
        try {
            const { id, name, text } = req.body; // Получаем данные для обновления

            // Ссылка на документ в коллекции "news"
            const newsDocRef = doc(db, 'info', id);

            // Обновляем поля документа
            await updateDoc(newsDocRef, {
                name,
                text,
            });

            return res.json({ message: 'Info успешно обновлена', id, status: 200 });
        } catch (error) {
            console.error('Ошибка при обновлении новости:', error);
            return res.status(500).json({ error: 'Произошла ошибка при обновлении новости' });
        }
    }
    

}

module.exports = new InfoController()
