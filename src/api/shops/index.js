import request from '@/utils/request'

export function putInfo(json){
    return request({
        url:"/info",
        method:'put',
        params:json
    })
}

// 获取营业行业
export function getType(json){
    return request({
        url:"/type",
        method:'get',
        params:json
    })
}


export function getData(json){
    return request({
        url:"/info",
        method:'get',
        params:json
    })
}

