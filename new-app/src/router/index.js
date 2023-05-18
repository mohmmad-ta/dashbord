import { createRouter, createWebHistory } from 'vue-router'
import NewProduct from '../views/NewProduct.vue'
import AllProduct from '../views/AllProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'NewProduct',
      component: NewProduct
    },
    {
      path: '/all',
      name: 'AllProduct',
      component: AllProduct
    },
  ]
})

export default router
