import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/rebate",
        method:'get',
        params:json
    })
}
export function saveData(json){
    return request({
        url:"/rebate",
        method:'post',
        params:json
    })
}