import http from '@/http/http';

export default {
  // login
  login(form) {
    return http.post('/login', form);
  },
  logout() {
    return http.put('/logout');
  },
  getSession() {
    return http.get('/session');
  },
};
