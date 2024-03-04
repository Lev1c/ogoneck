import axios from "axios";

const $authHost = axios.create({
    baseURL: "http://localhost:5000/api/"
})

export {
    $authHost
}

export const sendForm = async (name, phone, email, text, pick) => {
    try {
        const {data} = await $authHost.post('/claim-create', {
            name,
            phone,
            email,
            text,
            pick,
        });

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const loginForm = async (name, password) => {
    try {
        const {data} = await $authHost.post('/user-login', {
            name,
            password,
        });

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const getClaim = async () => {
    try {
        const {data} = await $authHost.get('/claim-get');

        console.log(data)
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const changeTrim = async (id, trim) => {
    try {
        const {data} = await $authHost.patch('/claim-change', {
            "claimId": id,
            "trimNumber": trim
        });
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};

export const deleteTrim = async (claimId) => {
    try {
        console.log(claimId)
        const {data} = await $authHost.post('/claim-delete', {
            "claimId": claimId
        });
        return data;
    } catch(e) {
        
        console.log(e)
        return e;
    }
};