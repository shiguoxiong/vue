import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '../components/list.vue'
import product from '../components/product.vue'
import cart from '../components/cart.vue'
import login from '../components/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/car',
      name: 'cart',
      component: cart
    },
    {
      path: '/product/:id',
      component: product
    }
  ]
})
