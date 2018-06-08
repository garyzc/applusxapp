import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


const index = {
  path: '/',
  name: 'index',
  component:  (resolve) => { require(['../pages/index.vue'], resolve)},
  meta: { title:'首页' },
  children: [
      {
          path: '',
          component:  (resolve) => { require(['../pages/index/index.vue'], resolve)},
          meta: { title:'首页' },
      },
      {
          path: 'category/:id?',
          name: 'category',
          component:  (resolve) => { require(['../pages/index/category.vue'], resolve)},
          meta: { title:'分类首页' },
          children: [
              {
                  name: 'categorylist',
                  path: 'categorylist',
                  component:  (resolve) => { require(['../pages/index/category/list.vue'], resolve)},
                  meta: { title:'首页' },
              }
          ]
      },
      {
          path: 'cart',
          name: 'cart',
          component:  (resolve) => { require(['../pages/index/cart.vue'], resolve)},
          meta: { title:'首页' },
      },
      {
          path: 'my',
          name: 'my',
          component:  (resolve) => { require(['../pages/index/my.vue'], resolve)},
          meta: { title:'首页' },
      }
  ]
}

const search = {
  path: '/search',
  name: 'search',
  component:  (resolve) => { require(['../pages/search.vue'], resolve)},
  meta: { title:'搜索' },
}
const product = {
  path: '/product',
  name: 'product',
  component:  (resolve) => { require(['../pages/product.vue'], resolve)},
  meta: { title:'商品' },
}

const routes = [
  index,
  search,
  product

]


export default new Router({
  mode: 'hash',
  base: __dirname,
  routes
})
