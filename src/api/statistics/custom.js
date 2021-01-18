
import request from '@/utils/request'

// 新增用户
export function getNewUserCount(json){
    return request({
        url:"/statistics-user/new-user-count",
        method:'get',
        params:json
    })
}


// 用户量
export function getUserCount(json){
    return request({
        url:"/statistics-user/user-count",
        method:'get',
        params:json
    })
}


