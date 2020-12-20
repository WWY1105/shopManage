import request from '@/utils/request'


// 评价列表
export function getData(json){
    return request({
        url:"/product-eva/page",
        method:'get',
        params:json
    })
}

export function saveData(json){
    return request({
        url:"/product-eva",
        method:'post',
        params:json
    })
}


// 删除
export function deleteData(id){
    return request({
        url:"/product-eva/"+id,
        method:'delete',
        params:{}
    })
}
