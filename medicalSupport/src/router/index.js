import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue')
  },
  {
    path: '/casuisticas',
    name: 'Casuistica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Casuistica.vue')
  },
  {
    path: '/casuistica/causas',
    name: 'Causas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Causas.vue')
  },
  {
    path: '/casuistica/admissoes',
    name: 'Admissões',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admissoes.vue')
  },
  {
    path: '/casuistica/destinos',
    name: 'Destino',
    component: () => import(/* webpackChunkName: "about" */ '../views/Destinos.vue')
  },
  {
    path: '/qualidadedados',
    name: 'Qualidade dos Dados',
    component: () => import(/* webpackChunkName: "about" */ '../views/Qualidade.vue')
  },
  {
    path: '/qualidade/dados/permanencia',
    name: 'Qualidade dos Dados Permanencia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Permanencia.vue')
  },
  {
    path: '/qualidade/dados/intervencoes&exames',
    name: 'Qualidade dos Dados Intervenções e Exames',
    component: () => import(/* webpackChunkName: "about" */ '../views/Interv.vue')
  },
  {
    path: '/qualidade/dados/espera',
    name: 'Qualidade dos Dados Tempos de Espera',
    component: () => import(/* webpackChunkName: "about" */ '../views/Espera.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, 
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
