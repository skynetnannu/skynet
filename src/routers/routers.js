import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/website',
    name: 'index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/website/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
  },
  {
    path: '/website/projects',
    name: 'projects',
    component: () => import('@/pages/projects.vue'),
  },
  {
    path: '/website/services',
    name: 'services',
    component: () => import('@/pages/services2.vue'),
  },
  {
    path: '/website/contact',
    name: 'contact',
    component: () => import('@/pages/contact.vue'),
  },
  {
    path: '/website/pricing',
    name: 'pricing',
    component: () => import('@/pages/pricing.vue'),
  },
  {
    path: '/website/animation',
    name: 'Animation',
    component: () => import('@/pages/Animation.vue'),
  },
  {
    path: '/website/ad_creation',
    name: 'AdCreation',
    component: () => import('@/pages/adcreation.vue'),
  },

]

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

export default routers;