
import request from '@/utils/request'




export function getRule(json){
    return request({
        url:"/business-more-free",
        method:'get',
        params:json
    })
}
export function submitRule(json){
    return request({
        url:"/business-more-free",
        method:'post',
        params:json
    })
}
// 商品分类
export function goodCategory(json){
    return request({
        url:"/business-more-free",
        method:'get',
        params:json
    })
}

 
  