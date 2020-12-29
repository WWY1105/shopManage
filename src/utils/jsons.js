
// 订单类型
let orderTypeOptions=[{
    text: '普通',
    value: 'no'
}, {
    text: '预售',
    value: 'ys'
}, {
    text: '拼团',
    value: 'pt'
}, {
    text: '秒杀',
    value: 'ms'
}, {
    text: '砍价',
    value: 'kj'
}, {
    text: '免费拿',
    value: 'mfn'
}, {
    text: '星秒',
    value: 'xm'
}];
// 订单状态
let orderStatusOptions=[
    {
        value: '1',
        text: '待支付'
    }, {
        value: '2',
        text: '已支付-待发货'
    }, {
        value: '3',
        text: '已支付-待成团'
    }, {
        value: '4',
        text: '已成团-待发货'
    }, {
        value: '5',
        text: '团失败'
    }, {
        value: '6',
        text: '已发货,待确认收货'
    }, {
        value: '7',
        text: '确认收货,待评价'
    }, {
        value: '8',
        text: '已评价已完成'
    }, {
        value: '9',
        text: '申请售后'
    }, {
        value: '10',
        text: '售后同意'
    }, {
        value: '11',
        text: '售后拒绝'
    }, {
        value: '12',
        text: '已失效'
    },
]

// 客户类型
let customType=[{
    text: '全部',
    value: 'all'
},
{
    text: '普通用户',
    value: 'pt'
}, {
    text: '会员',
    value: 'hy'
}, {
    text: '星卡通',
    value: 'xkt'
}
]
export {
    orderTypeOptions,
    orderStatusOptions,
    customType
}