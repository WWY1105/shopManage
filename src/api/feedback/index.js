
import request from '@/utils/request'



// 发送
export function postMsg(params){
    return request({
        url:"/business-feed-back",
        method:'post',
        params
    })
}
