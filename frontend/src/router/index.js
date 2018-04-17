import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Person from '@/components/person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    }
  ]
})
