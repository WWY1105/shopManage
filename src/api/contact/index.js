
import request from '@/utils/request'

// 获取聊天列表
export function list(){
    return request({
        url:"/business-chat",
        method:'get',
        params:{}
    })
}

// 发送
export function postMsg(params){
    return request({
        url:"/business-chat",
        method:'post',
        params
    })
}
