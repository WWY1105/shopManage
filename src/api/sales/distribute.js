import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/business-express-rule",
        method:'get',
        params:json
    })
}


export function saveData(json){
    return request({
        url:"/business-express-rule",
        method:'post',
        params:json
    })
}