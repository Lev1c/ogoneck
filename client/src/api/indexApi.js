import axios from "axios";

const $linkHost = axios.create({
    baseURL: "https://ogoneck.vercel.app/api"
})

const $authHost = axios.create({
    baseURL: "http://localhost:8000/api/"
})

let $host = $authHost

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
