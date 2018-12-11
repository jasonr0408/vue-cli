import http from '@/http/http';

export default {
  // login
<<<<<<< HEAD
  login(form) {
    return http.post('/login', form);
  },
  logout() {
    return http.put('/logout');
  },
  getSession() {
    return http.get('/session');
=======
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
>>>>>>> dc tranning done
  },
};
