
import request from '@/utils/request'

// 获取订单量
export function getOrderNum(json){
    return request({
        url:"/statistics/order-count",
        method:'get',
        params:json
    })
}

// 订单退货量
export function getReturnCount(json){
    return request({
        url:"/statistics/return-count",
        method:'get',
        params:json
    })
}

// 订单金额
export function getOrderPrice(json){
    return request({
        url:"/statistics/order-price",
        method:'get',
        params:json
    })
}
// 订单退货金额
export function getReturnPrice(json){
    return request({
        url:"/statistics/return-price",
        method:'get',
        params:json
    })
}

// 实收金额
export function getPrice(json){
    return request({
        url:"/statistics/get-price",
        method:'get',
        params:json
    })
}

// 订单取消量   
export function getCancelOrderCount(json){
    return request({
        url:"/statistics/cancel-order-count",
        method:'get',
        params:json
    })
}
// 运费成本


// 订单取消金额
