import request from '@/utils/request'


// 获取商品列表
export function getGoodDetail(json){
    return request({
        url:"/product",
        method:'get',
        params:json
    })
}
// 根据id 获取
export function getData(id){
    return request({
        url:"/product/"+id,
        method:'get',
        params:{}
    })
}
// 添加商品
export function saveData(json){
    return request.post("/product",json)
}
export function putData(json,id){
    return request.put("/product/"+id,json)
}



