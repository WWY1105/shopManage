import request from '@/utils/request'


export function login(json){
    return request({
        url:"/oauth/token",
        method:'post',
        params:json
    })
}


export function getInfo() {
    return request({
      url: '/info',
      method: 'get'
    })
  }
  
  export function branch() {
    return request({
      url: '/branch',
      method: 'get'
    })
  }