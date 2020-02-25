import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/facts',
    name: 'FactPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "factPage" */ '../views/Facts.vue')
  },
  {
    path: '/facts/:slug',
    name: 'getFact',
    component: () => import(/* webpackChunkName: "getFact" */'../components/Facts/GetFact.vue')
  },
  {
    path: '/facts/addfact',
    name: 'AddFact',
    component: () => import(/* webpackChunkName: "addFactt" */ '../components/Facts/AddFact.vue')
  },
  {
    path: '/facts/edit/:slug',
    name: 'editFact',
    component: () => import(/* webpackChunkName: "editFact" */ '../components/Facts/EditFact.vue')
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: () => import(/* webpackChunkName: "adminPage" */ '../views/Admin.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
