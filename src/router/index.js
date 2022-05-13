import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: () => import('@/views/login.vue') },
  { path: '/guest', component: () => import('@/views/guest.vue')  }
]

const router = new VueRouter({
  routes
})

export default router
