// import smileMember from '@/api/account';

const user = {
  state: {
    userInfo: {},
  },

  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
  },
  actions: {
    GetUserInfo({ commit }) {
      console.log(commit);
    },
  },
};

export default user;
