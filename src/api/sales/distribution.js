import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/business-distribution",
        method:'get',
        params:json
    })
}
export function saveData(json){
    return request({
        url:"/business-distribution",
        method:'post',
        params:json
    })
}