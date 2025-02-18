import {$host} from "./indexApi";

export const documentGet = async () => {
    try {
        const {data} = await $host.get('/document-get', {});
        
        return(data)   
    } catch(e) {
        return(e)
    }
}

export const documentCreate = async (name, doc) => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage

        // Добавляем имя в FormData
        doc.append('name', name);

        const { data } = await $host.post('/document-create', doc, {
            headers: {
                'Authorization': `Bearer ${token}`, // Указываем токен в заголовке
                'Content-Type': 'multipart/form-data', // Указываем тип контента
            },
        });

        return data;
    } catch (e) {
        console.error('Ошибка при создании документа:', e);
        throw e;
    }
};

export const docDelete = async (id) => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        const { data } = await $host.delete(
            `/document-delete/${id}`,
            {
                headers: { 
                    Authorization: `Bearer ${token}` // Указываем токен в заголовке
                },
            }
        );
        
        return(data)
    } catch(e) {
        return(e)
    }
}