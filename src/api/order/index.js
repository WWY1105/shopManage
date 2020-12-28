import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/order/page",
        method:'get',
        params:json
    })
}


export function saveData(json){
    return request({
        url:"/order",
        method:'post',
        params:json
    })
}



// 物流公司
export function getLogistics(json){
    return request({
        url:"/order",
        method:'get',
        params:json
    })
}
// 保存物流

export function saveLogistics(json){
    return request({
        url:"/order/send",
        method:'post',
        params:json
    })
}