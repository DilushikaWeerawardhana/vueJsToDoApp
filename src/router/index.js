import Vue from 'vue'
import Router from 'vue-router'
import toDoList from '@/components/toDoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toDoList',
      component: toDoList
    }
  ]
})
