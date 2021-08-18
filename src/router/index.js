import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const HomeView = () => import('../views/Home.vue')
const Error404View = () => import('../views/Error404.vue')
const ProductDetailView = () => import('../views/ProductDetail.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: HomeView },
      { path: '/product/:productType', component: ProductDetailView },
      { path: '/error404', component: Error404View },
      { path: '*', redirect: '/error404' }
    ]
  })
}
