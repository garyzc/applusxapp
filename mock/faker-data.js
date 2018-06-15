const mock_avatars2 = [
    'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
    'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
    'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
    'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
    'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
    'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
    'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];
const mock_products = [
    '/static/mock/images/5a6947e5N39e16ed8.jpg!q70.jpg',
    '/static/mock/images/5a434789N73be71c3.jpg!q70.jpg',
    '/static/mock/images/5aa8c8a8N7cc84d18.jpg!q70.jpg',
    '/static/mock/images/5ad8525fN051e96d5.jpg!q70.jpg.webp.jpg',
    '/static/mock/images/5af50e5fNa34f717e.jpg!q70.jpg',
    '/static/mock/images/58aaa7e5N895bc6b0.jpg',
    '/static/mock/images/58c8a7f9Nb09c91df.jpg',
    '/static/mock/images/58c8a79eN9f3943a4.jpg',
    '/static/mock/images/59964a51N25b9098b.jpg',
]
const mock_titles = [
    '联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)',
    '小米(MI)Pro 15.6英寸金属轻薄笔记本(i5-8250U 8G 256GSSD MX150 2G独显 FHD 指纹识别 预装office)深空灰',
    '荣耀MagicBook 14英寸轻薄窄边框笔记本电脑（i7-8550U 8G 256G MX150 2G独显 FHD IPS 正版Office）冰河银',
    '联想笔记本 小新潮7000 超薄笔记本电脑 13.3英寸轻薄窄边框 商务办公本 i3-7100U/4G内存/128G固态/皓月银',
    '联想ThinkPad 翼480（0VCD）英特尔8代酷睿14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 128GSSD+500G 2G独显）',
    '荣耀MagicBook 14英寸轻薄窄边框笔记本电脑（i5-8250U 8G 256G MX150 2G独显 FHD IPS 正版Office）冰河银',
    '联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050 2G IPS 黑)',
    '戴尔DELL灵越燃7000 II 14.0英寸轻薄窄边框笔记本电脑(i5-8250U 8G 128GSSD+1T MX150 2G独显 IPS)银',
    '机械师游戏本（MACHENIKE） F117-B八代i7/GTX1050Ti全面屏轻薄吃鸡',
]
const wrapRequest = (datas) => {
    return  datas
}
module.exports = function () {
    var faker = require("faker");
    faker.locale = "zh_CN";
    var _ = require("lodash");
    return {
        cart: wrapRequest(_.times(5, function (n) {
            return {
                id: n+1,
                img: mock_products[n%8],
                text: mock_titles[n%8],
                avatar: faker.internet.avatar(),
                checked: false,
                price: 100,
                ordernum: 1
            }
        })),
        search: wrapRequest(_.times(100, function (n) {
            return {
                id: n+1,
                img: mock_products[n%8],
                text: mock_titles[n%8],
                avatar: faker.internet.avatar()
            }
        })),
        people: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        }),
        address: _.times(100, function (n) {
            return {
                id: faker.random.uuid(),
                city: faker.address.city(),
                county: faker.address.county()
            }
        })
    }
}
