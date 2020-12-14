import request from '@/utils/request'


export function list(json){
    return request({
        url:"/member/page",
        method:'get',
        params:json
    })
}
export function total(json){
    return request({
        url:"/member/statistics",
        method:'get',
        params:json
    })
}


