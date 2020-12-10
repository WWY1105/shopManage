import request from '@/utils/request'


// 获取商品列表
export function list(json){
    return request({
        url:"/product/page",
        method:'get',
        params:json
    })
}

// 获取商品分类
export function getCategory(json){
    return request({
        url:"/product-category/group",
        method:'get',
        params:json
    })
}
// 添加分类
export function addCategory(json){
    return request({
        url:"/product-category",
        method:'post',
        params:json
    })
}
// 删除
export function deleteCate(id){
    return request({
        url:"/product-category/"+id,
        method:'delete',
        params:{}
    })
}

// 批量保存
export function save(json){
    // return request({
    //     url:"/product-category/batch",
    //     method:'post',
    //     body:json
    // })
    return request.post("/product-category/batch",json)
}