import request from '@/utils/request'


export function listPage(json){
    return request({
        url:"/coupon/page",
        method:'get',
        params:json
    })
}
export function list(json){
    return request({
        url:"/coupon",
        method:'get',
        params:json
    })
}
export function total(json){
    return request({
        url:"/coupon/statistics",
        method:'get',
        params:json
    })
}
export function rule(json){
    return request({
        url:"/coupon/auto",
        method:'get',
        params:json
    })
}

export function submitRule(json){
    return request({
        url:"/coupon/auto",
        method:'post',
        params:json
    })
}



