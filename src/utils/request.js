import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth';


const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 60000
})
const prefix = "/api/business";


let baseToken = process.env.BASE_TOKEN;
let requestUrl = '';
// request拦截器
service.interceptors.request.use(config => {
    requestUrl = config.url;
    if (config.url == "/oauth/token") {
        config.headers['Authorization'] = baseToken
    } else {
        config.url = prefix + config.url;
        if (store.getters.token) {
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }else{
            alert('没有token')
        }
    }

    return config;

}, err => {
    console.log(error)
    Promise.reject(error)
})


// respone拦截器
service.interceptors.response.use(
    response => {
        console.log(response)
        const res = response.data;
        if (requestUrl != "/oauth/token") {
            if (res.code != '00') {
                Message({
                    showClose: true,
                    message: res.msg,
                    duration: 3 * 1000,
                    type: 'error'
                })
                return Promise.reject('error')
            }
        }

        return res
    }

)

export default service