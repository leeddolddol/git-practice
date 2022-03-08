import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/basic',
    name: 'BasicView',
    component: () => import(/* webpackChunkName: "about" */ '../views/BasicView.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding.vue')
  },
  {
    path: '/dataBinding2',
    name: 'DataBinding2',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding2.vue')
  },
  {
    path: '/dataBinding3',
    name: 'DataBinding3',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding3.vue')
  },
  {
    path: '/aboutRendering',
    name: 'AboutRendering',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutRendering.vue')
  },
  {
    path: '/eventBinding',
    name: 'EventBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventBinding.vue')
  },
  {
    path: '/computedAndWatch',
    name: 'ComputedAndWatch',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComputedAndWatch.vue')
  },
  {
    path: '/basicExerciseSearch',
    name: 'BasicExerciseSearch',
    component: () => import(/* webpackChunkName: "about" */ '../views/BasicExerciseSearch.vue')
  },
  {
    path: '/basicExerciseSave',
    name: 'BasicExerciseSave',
    component: () => import(/* webpackChunkName: "about" */ '../views/BasicExerciseSave.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
