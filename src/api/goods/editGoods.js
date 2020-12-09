import request from '@/utils/request'


// 获取商品列表
export function getGoodDetail(json){
    return request({
        url:"/product",
        method:'get',
        params:json
    })
}


