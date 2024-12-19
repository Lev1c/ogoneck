import {$host} from "./indexApi";

export const userReg = async () => {
    try {
        const {data} = await $host.get('/info-get', {});
        
        return(data)   
    } catch(e) {
        return(e)
    }
}

export const userLogin = async (name, pass) => {
    try {
        const {data} = await $host.post(`user-login`, {
            name: name,
            password: pass
        });
        console.log(data)
        return(data)   
    } catch(e) {
        console.log(e)
        return(e)
    }
}

export const userRrotected = async () => {
    try {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        const { data } = await $host.post(
            '/user-token',
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