const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《红楼梦》',
                date: '1996-9',
                price: 185.00,
                count: 1
            },
            {
                id: 3,
                name: '《金瓶梅》',
                date: '2016-9',
                price: 15.00,
                count: 1
            },
            {
                id: 4,
                name: '《算法导论2》',
                date: '2026-9',
                price: 35.00,
                count: 1
            },
        ]
    },
    methods: {
        getFinalPrice(price) {
            return '￥'+price.toFixed(2)
        }
    },
    filters: {
        showPrice(price) {
            return '￥'+price.toFixed(2)
        }
    }
})