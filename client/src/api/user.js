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

export const userProtected = async (name, text) => {
    try {
        const {data} = await $host.post('/info-create', {
            name, 
            text, 
        });
        
        return(data)
    } catch(e) {
        return(e)
    }
}