import request from '@/utils/request'

// 获取聊天列表
export function list(){
    return request({
        url:"/business-msg",
        method:'get',
        params:{}
    })
}