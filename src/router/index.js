import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Credit from '@/pages/Credit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    }
  ]
})
