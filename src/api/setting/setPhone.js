import request from '@/utils/request'


export function bindPhone(json){
    return request({
        url:"/bind-mobile",
        method:'put',
        params:json
    })
}

// 修改密码
export function changePas(json){
    return request({
        url:"/change-password",
        method:'put',
        params:json
    })
}

