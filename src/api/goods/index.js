import request from '@/utils/request'


// 获取商品列表
export function list(json){
    return request({
        url:"/product/page",
        method:'get',
        params:json
    })
}
