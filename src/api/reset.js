import request from '@/utils/request'


export function reset(json){
    return request({
        url:"/password",
        method:'post',
        params:json
    })
}
