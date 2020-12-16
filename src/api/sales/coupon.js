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
// 赠送规则获取
export function rule(json){
    return request({
        url:"/coupon/auto",
        method:'get',
        params:json
    })
}
// 商品分类
export function goodCategory(json){
    return request({
        url:"/product-category",
        method:'get',
        params:json
    })
}

// 提交赠送规则
export function submitRule(json){
    return request({
        url:"/coupon/auto",
        method:'post',
        params:json
    })
}

export function submitCoupone(json){
    return request({
        url:"/coupon",
        method:'post',
        params:json
    })
}

