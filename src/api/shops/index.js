import request from '@/utils/request'

export function putInfo(json) {
    return request({
        url: "/info",
        method: 'put',
        params: json
    })
}


// 添加分店
export function saveInfo(json) {
    return request({
        url: "/info",
        method: 'post',
        params: json
    })
}


// 获取营业行业
export function getType(json) {
    return request({
        url: "/type",
        method: 'get',
        params: json
    })
}

// 获取公众号码

export function getScanCode(json) {
    return request({
        url: "/auth-url",
        method: 'get',
        params: json
    })
}

export function getData(json) {
    return request({
        url: "/info",
        method: 'get',
        params: json
    })
}

// 切换分店
export function changeShop(json) {
    return request({
        url: "/branch/token",
        method: 'post',
        params: json
    })
}
// 创建小程序(微信接口)
export function postFastregisterweapp(json) {
    return request({
        url: "/fastregisterweapp",
        method: 'post',
        params: json
    })
}
// 删除分店
export function deleteShopFn(id) {
    return request({
        url: "/branch",
        method: 'delete',
        params: {
            businessId: id
        }
    })
}

// 商家统计
export function getStatic(json) {
    return request({
        url: "/statistics",
        method: 'get',
        params: json
    })
}

// 获取banner
export function getBanner(json) {
    return request({
        url: "/banner",
        method: 'get',
        params: json
    })
}

// upOrDown 排序？？？


// 删除banner

export function deleteBanner(id) {
    return request({
        url: "/banner/" + id,
        method: 'delete',
        params: {}
    })
}


// saveBannerFn
export function saveBanner(json) {
    return request({
        url: "/banner",
        method: 'post',
        params: json
    })
}

// 修改banner
export function putBanner(id,json) {
    return request({
        url: "/banner/"+id,
        method: 'put',
        params: json
    })
}


// 获取厨房部门列表
export function kitchenList(json) {
    return request({
        url: "/kitchen",
        method: 'get',
        params: json
    })
}
// 添加厨房部门信息

export function kitchenAdd(json) {
    return request({
        url: "/kitchen",
        method: 'post',
        params: json
    })
}
// 根据厨房部门ID获取厨房部门详情
export function kitchenId(id,json) {
    return request({
        url: `/kitchen/${id}`,
        method: 'get',
        params: json
    })
}
// 更新厨房部门信息
export function putKitchen(id,json) {
    return request({
        url: "/kitchen/"+id,
        method: 'put',
        params: json
    })
}

// 根据厨房部门ID删除厨房部门数据
export function deleteKitchen(id,json) {
    return request({
        url: "/kitchen/"+id,
        method: 'delete',
        params: json
    })
}
// 分页获取厨房部门数据(分页)