import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      // meta: { auth: true }, // 需驗證
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/lifecycle',
      component: () => import('./views/Lifecycle.vue'),
    },
    {
      path: '/databinding',
      component: () => import('./views/DataBinding.vue'),
    },
    {
      path: '/directives',
      component: () => import('./views/Directives.vue'),
    },
    {
      path: '/parent1',
      component: () => import('./views/Parent1.vue'),
    },
    {
      path: '/parent2',
      component: () => import('./views/Parent2.vue'),
    },
    {
      path: '/parent3',
      component: () => import('./views/Parent3.vue'),
    },
    {
      path: '/axios',
      component: () => import('./views/Axios.vue'),
    },


  ],
});
