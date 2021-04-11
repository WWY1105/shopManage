import request from '@/utils/request'

export function putInfo(json){
    return request({
        url:"/info",
        method:'put',
        params:json
    })
}


// 添加分店
export function saveInfo(json){
    return request({
        url:"/info",
        method:'post',
        params:json
    })
}


// 获取营业行业
export function getType(json){
    return request({
        url:"/type",
        method:'get',
        params:json
    })
}

// 获取公众号码

export function getScanCode(json){
    return request({
        url:"/auth-url",
        method:'get',
        params:json
    })
}

export function getData(json){
    return request({
        url:"/info",
        method:'get',
        params:json
    })
}

// 切换分店
export function changeShop(json){
    return request({
        url:"/branch/token",
        method:'post',
        params:json
    })
}
// 创建小程序(微信接口)
export function postFastregisterweapp(json){
    return request({
        url:"/fastregisterweapp",
        method:'post',
        params:json
    })
}
// 删除分店
export function deleteShopFn(id){
    return request({
        url:"/branch",
        method:'delete',
        params:{
            businessId:id
        }
    })
}

// 商家统计
export function getStatic(json){
    return request({
        url:"/statistics",
        method:'get',
        params:json
    })
}