import {$host} from "./indexApi";

export const newsGet = async () => {
    try {
        const {data} = await $host.get('/news-get', {});
        
        return(data)   
    } catch(e) {
        return(e)
    }
}

export const newsGetAdmin = async () => {
    try {
        const {data} = await $host.get('/news-get-admin', {});
        
        return(data)   
    } catch(e) {
        return(e)
    }
}

export const newsGetId = async (id) => {
    try {
        const {data} = await $host.get(`/news-get-id/${id}`,);
        
        return(data)   
    } catch(e) {
        return(e)
    }
}

export const newsCreate = async (name, text, dop_text, img, visible) => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        const { data } = await $host.post(
            '/news-create',
            {
                name,
                text,
                dop_text,
                img,
                visible
            },
            {
                headers: { 
                    Authorization: `Bearer ${token}` // Указываем токен в заголовке
                }
            }
        );
        
        return(data)
    } catch(e) {
        return(e)
    }
}

export const newsChange = async (id, name, text, dop_text, img, visible) => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        const { data } = await $host.patch(
            '/news-change',
            {
                id,
                name,
                text,
                dop_text,
                img,
                visible
            },
            {
                headers: { 
                    Authorization: `Bearer ${token}` // Указываем токен в заголовке
                }
            }
        );
        
        return(data)
    } catch(e) {
        return(e)
    }
}

export const newsDelete = async (id) => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        const { data } = await $host.delete(
            `/news-delete/${id}`,
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