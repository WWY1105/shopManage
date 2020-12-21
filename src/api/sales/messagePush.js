import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/business-message/page",
        method:'get',
        params:json
    })
}
export function saveData(json){
    return request({
        url:"/business-message",
        method:'post',
        params:json
    })
}
export function updateData(json,id){
    return request({
        url:"/business-message/"+id,
        method:'put',
        params:json
    })
}
export function deleteData(id){
    return request({
        url:"/business-message/"+id,
        method:'delete',
        params:json
    })
}
