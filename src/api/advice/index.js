import request from '@/utils/request'


// 建议列表
export function getData(json){
    return request({
        url:"/feed-back/page",
        method:'get',
        params:json
    })
}
