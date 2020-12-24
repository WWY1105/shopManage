
import request from '@/utils/request'

// 获取订单量
export function getOrderNum(json){
    return request({
        url:"/statistics/order-count",
        method:'get',
        params:json
    })
}

