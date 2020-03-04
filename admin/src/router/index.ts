import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CourseCrud from '../views/courses/CourseCrud.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'home', path: '/', component: Home },
      { name: 'courses-crud', path: '/courses/list', component: CourseCrud }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
