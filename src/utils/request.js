import axios from 'axios'

import { Message } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'
import Vue from 'vue'

console.log(Vue.prototype)

const service=axios.create({
    baseURL:process.env.BASE_API,
    timeout:60000
})

// request拦截器
service.interceptors.request.use(config=>{
    if(store.getters.token){
        config.headers['Ahtnorization']=getToken()
    }
    console.log(config)
    return config;
    
},err=>{
    console.log(error) 
    Promise.reject(error)
})


// respone拦截器
service.interceptors.response.use(
    response=>{
        const res=response.data;
        
    }
)

export default service