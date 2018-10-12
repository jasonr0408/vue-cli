import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(VueProgressBar, {
  color: 'rgb(84, 92, 100)',
  failedColor: 'red',
  // height: '5px',
  thickness: '3px',
  transition: {
    speed: '0.1s',
    opacity: '0.6s',
    termination: 300,
  },
  autoRevert: true,
  inverse: false,
});

router.beforeEach((to, from, next) => {
  const auth = to.matched.some(r => r.meta.auth);
  // 判斷這個route有沒有綁route權限
  if (!auth) {
    next();
  } else {
    store.dispatch('checkSession').then(() => {
      if (store.getters.operator) {
        next();
      } else {
        next('/login');
      }
    })
      .catch(() => {
        next('/login');
      });
  }
});

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');


export default app;
