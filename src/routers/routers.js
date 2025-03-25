import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/skynet',
    name: 'index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/skynet/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
  },
  {
    path: '/skynet/projects',
    name: 'projects',
    component: () => import('@/pages/projects.vue'),
  },
  {
    path: '/skynet/services',
    name: 'services',
    component: () => import('@/pages/services2.vue'),
  },
  {
    path: '/skynet/contact',
    name: 'contact',
    component: () => import('@/pages/contact.vue'),
  },
  {
    path: '/skynet/pricing',
    name: 'pricing',
    component: () => import('@/pages/pricing.vue'),
  },
  {
    path: '/skynet/animation',
    name: 'Animation',
    component: () => import('@/pages/Animation.vue'),
  },
  {
    path: '/skynet/ad_creation',
    name: 'AdCreation',
    component: () => import('@/pages/adcreation.vue'),
  },

]

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

export default routers;