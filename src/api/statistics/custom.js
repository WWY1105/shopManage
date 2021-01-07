
import request from '@/utils/request'

// 新增用户
export function getNewUserCount(json){
    return request({
        url:"/statistics-user/new-user-count",
        method:'get',
        params:json
    })
}

// 商品销量
export function getProductCount(json){
    return request({
        url:"/statistics-user/product-count",
        method:'get',
        params:json
    })
}

// 商品退货率
export function getProductReturnCount(json){
    return request({
        url:"/statistics-user/product-return-count",
        method:'get',
        params:json
    })
}
// 用户量
export function getUserCount(json){
    return request({
        url:"/statistics-user/user-count",
        method:'get',
        params:json
    })
}

//消费金额
export function getXfUser(json){
    return request({
        url:"/statistics-user/xf-user",
        method:'get',
        params:json
    })
}

