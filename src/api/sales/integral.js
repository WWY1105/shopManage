import request from '@/utils/request'

// 获取积分任务列表
export function getTask(json){
    return request({
        url:"/integral-task",
        method:'get',
        params:json
    })
}

// 更新积分任务信息
export function putData(id){
    return request({
        url:"/integral-task/"+id,
        method:'put',
        params:{}
    })
}

// 根据商家ID获取积分兑换比例详情
export function getExchange(json){
    return request({
        url:"/integral-task/exchange",
        method:'get',
        params:json
    })
}

// 修改积分兑换比例信息
export function postData(json){
    return request({
        url:"/integral-task/exchange",
        method:'post',
        params:json
    })
}7