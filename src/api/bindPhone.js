import request from '@/utils/request'


export function bindPhone(json){
    return request({
        url:"/bind-mobile",
        method:'put',
        params:json
    })
}
