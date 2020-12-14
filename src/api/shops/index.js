import request from '@/utils/request'

export function putInfo(json){
    return request({
        url:"/info",
        method:'put',
        params:json
    })
}
