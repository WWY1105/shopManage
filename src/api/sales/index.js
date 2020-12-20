import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/business-market",
        method:'get',
        params:json
    })
}


export function saveData(json){
    return request({
        url:"/business-market",
        method:'podt',
        params:json
    })
}