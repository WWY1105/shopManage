import request from '@/utils/request'


export function getData(json){
    return request({
        url:"/business-discount",
        method:'get',
        params:json
    })
}
export function saveData(json){
    return request({
        url:"/business-discount",
        method:'post',
        params:json
    })
}
export function updateData(json,id){
    return request({
        url:"/business-discount/"+id,
        method:'put',
        params:json
    })
}
export function deleteData(id){
    return request({
        url:"/business-discount/"+id,
        method:'delete',
        params:json
    })
}
