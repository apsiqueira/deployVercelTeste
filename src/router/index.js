import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component:()=>import(/*#webpackChunkName:"pedidos"*/'../views/HomeView.vue')

  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component:()=>import(/*#webpackChunkName:"pedidos"*/'../views/Pedidos.vue')
    
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
