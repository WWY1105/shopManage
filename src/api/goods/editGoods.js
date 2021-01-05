import request from '@/utils/request'


// 获取商品列表
export function getGoodDetail(json){
    return request({
        url:"/product",
        method:'get',
        params:json
    })
}
// 添加商品
export function saveData(json){
    return request.post("/product",json)
}

