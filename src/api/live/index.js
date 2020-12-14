import request from '@/utils/request'


export function list(json){
    return request({
        url:"/live/page",
        method:'get',
        params:json
    })
}
