/* eslint no-param-reassign: ["error", { "props": false }] */
import smileMember from '@/api/account';


const state = {
  user: null,
};

const getters = {
  operator: st => st.user,
};

const mutations = {
  SET_USER(st, user) {
    st.user = user;
  },
};

const actions = {
  Login({ commit }, formData) {
    return new Promise((resolve, reject) => {
      smileMember.login(formData).then((response) => {
        if (response.data.result) {
          commit('SET_USER', response.data.data);
        }
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  Logout({ commit }) {
    commit('SET_USER', null);
    return new Promise((resolve, reject) => {
      smileMember.logout().then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  checkSession({ commit }) {
    return new Promise((resolve, reject) => {
      smileMember.getSession().then((response) => {
        if (response.data.result) {
          commit('SET_USER', response.data.data);
        } else {
          commit('SET_USER', null);
        }
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
