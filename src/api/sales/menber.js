import request from '@/utils/request'



// 会员等级列表（不分页）
export function getData(json){
    return request({
        url:"/business-vip-level",
        method:'get',
        params:json
    })
}

export function saveData(json){
    return request({
        url:"/business-vip-level",
        method:'post',
        params:json
    })
}

export function saveEditData(id,json){
    return request({
        url:"/business-vip-level/"+id,
        method:'put',
        params:json
    })
}


// 删除
export function deleteMenber(id){
    return request({
        url:"/business-vip-level/"+id,
        method:'delete',
        params:{}
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
