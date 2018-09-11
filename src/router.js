import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/jr',
      component: () => import('./views/jr.vue'),
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
      path: '/lifecycle',
      component: () => import('./views/LifeCycle.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
