import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/home',
      meta: { auth: true }, // 需驗證
      component: () => import('./views/JR.vue'),
    },
  ],
});
