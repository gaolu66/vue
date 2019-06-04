import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from "../pages/MSite/MSite.vue"
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[ 
    {
       path: '/msite',
       component: MSite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})