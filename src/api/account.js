import http from '@/http/http';

export default {
  // login
  getUser1() {
    return http.get('/users');
  },
  getUser2(name) {
    return http.get(`/user/${name}`);
  },
  putUser(form) {
    return http.put('/user', form);
  },
  deleteUser(name) {
    return http.delete(`/user/?name=${name}`);
  },
  postUser(form) {
    return http.post('/user', form);
  },
};
