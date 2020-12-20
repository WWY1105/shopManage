import request from '@/utils/request'

//中奖记录
export function getData(json){
    return request({
        url:"/business-prize/page",
        method:'get',
        params:json
    })
}
// 优惠券
export function getCouponList(json){
    return request({
        url:"/coupon",
        method:'get',
        params:json
    })
}
// 奖品
export function getPrize(json){
    return request({
        url:"/business-prize",
        method:'get',
        params:json
    })
}
export function getRule(json){
    return request({
        url:"/business-prize/rule",
        method:'get',
        params:json
    })
}

export function saveData(json){
    return request({
        url:"/business-prize",
        method:'post',
        params:json
    })
}
export function saveRule(json){
    return request({
        url:"/business-prize/rule",
        method:'post',
        params:json
    })
}
export function updateData(json,id){
    return request({
        url:"/business-prize/"+id,
        method:'put',
        params:json
    })
}


export function deleteData(id){
    return request({
        url:"/business-prize/"+id,
        method:'delete',
        params:{}
    })
}