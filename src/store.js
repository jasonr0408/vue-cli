import Vue from 'vue';
import Vuex from 'vuex';
import operator from '@/store/modules/operator';
// import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    operator,
    // user,
  },
});

export default store;
