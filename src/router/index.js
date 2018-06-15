import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Index from '../pages/index.vue'
import Search from '../pages/search.vue'


const index = {
  path: '/',
  name: 'index',
  redirect: 'home',
//   component:  (resolve) => { require(['../pages/index.vue'], resolve)},
  component: Index,
  meta: { title:'首页' },
  children: [
      {
          path: 'home',
          name: 'home',
          component:  (resolve) => { require(['../pages/index/home.vue'], resolve)},
          meta: { title:'首页', savepos:true },
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
          path: 'user',
          name: 'user',
          component:  (resolve) => { require(['../pages/index/user.vue'], resolve)},
          meta: { title:'首页' },
      }
  ]
}

const search = {
  path: '/search',
  name: 'search',
//   component:  (resolve) => { require(['../pages/search.vue'], resolve)},
  component:  Search,
  meta: { title:'搜索' },
}
const product = {
  path: '/product',
  name: 'product',
  component:  (resolve) => { require(['../pages/product.vue'], resolve)},
  meta: { title:'商品' },
}
const setting = {
  path: '/setting',
  name: 'setting',
  component:  (resolve) => { require(['../pages/setting.vue'], resolve)},
  meta: { title:'设置' },
}
const profile = {
  path: '/profile',
  name: 'profile',
  component:  (resolve) => { require(['../pages/profile.vue'], resolve)},
  meta: { title:'个人信息' },
}

const routes = [
  index,
  search,
  product,
  setting,
  profile,

]

const newrouter = new Router({
    mode: 'hash',
    base: __dirname,
    routes,
    scrollBehavior (to, from, savedPosition) {
        console.log(to.meta)
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
        } else {
            const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
            if (to.hash) {
                position.selector = to.hash
            }
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // cords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0
                position.y = 0
            }
            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return position
        }
    }
})

newrouter.beforeEach((to, from, next) => {
    if(from.meta.savepos) {
        from.meta.x = 10
    }
    next()
})

export default newrouter
