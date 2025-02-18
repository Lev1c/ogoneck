import axios from "axios";

const $linkHost = axios.create({
    baseURL: "http://95.214.62.165:8000/api"
})

const $authHost = axios.create({
    baseURL: "http://localhost:8000/api/"
})

let $host = $linkHost

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)
$linkHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
