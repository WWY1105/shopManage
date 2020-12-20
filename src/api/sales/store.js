import request from '@/utils/request'

// 统计数据
export function getTotal(json){
    return request({
        url:"/stored-card/statistice",
        method:'get',
        params:json
    })
}
// 卡背景列表
export function getBg(json){
    return request({
        url:"/stored-card/imgurl",
        method:'get',
        params:json
    })
}

// 储值卡列表（不分页）
export function getData(json){
    return request({
        url:"/stored-card",
        method:'get',
        params:json
    })
}

export function saveData(json){
    return request({
        url:"/stored-card",
        method:'post',
        params:json
    })
}

export function saveEditData(id,json){
    return request({
        url:"/stored-card/"+id,
        method:'put',
        params:json
    })
}


// 删除
export function deleteCard(id){
    return request({
        url:"/stored-card/"+id,
        method:'delete',
        params:{}
    })
}
