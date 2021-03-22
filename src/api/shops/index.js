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