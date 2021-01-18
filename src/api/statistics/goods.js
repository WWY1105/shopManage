import request from '@/utils/request'

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

//消费金额
export function getXfUser(json){
    return request({
        url:"/statistics-user/xf-user",
        method:'get',
        params:json
    })
}
