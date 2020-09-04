import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '@/views/Books.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/BookInfo/:id',
    name: 'Bookinfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BookInfo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
