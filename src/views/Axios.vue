<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button type="primary" round @click="getUser1()">Get User 1</el-button>
      <el-button type="success" round @click="getUser2()">Get User 2</el-button>
      <el-button type="info" round @click="putUser()">Put User</el-button>
      <el-button type="warning" round @click="deleteUser()">Delete User</el-button>
      <el-button type="danger" round @click="postUser()">Post User</el-button>
    </el-row>
  </div>
</template>

<script>
import app from '../main'; // import the instance
import accountApi from '@/api/account';

export default {
  data() {
    return {
      msg: 'Axios Demo!!',
      user: {
        name: 'Annie',
      },
    };
  },
  created() {
    app.$Progress.start(10);
  },
  methods: {
    getUser1() {
      accountApi.getUser1()
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.status.status_code === 200) {
            this.$message({
              type: 'success',
              message: 'get1成功!',
            });
          } else {
            this.$message.error('API Error');
          }
        })
        .catch((error) => {
          // 彈跳通知
          this.$message.error(error.message);
        });
    },

    getUser2() {
      accountApi.getUser2('Jason R')
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.status.status_code === 200) {
            this.$message({
              type: 'success',
              message: 'get2成功!',
            });
          } else {
            this.$message.error('API Error');
          }
        })
        .catch((error) => {
          // 彈跳通知
          this.$message.error(error.message);
        });
    },

    putUser() {
      accountApi.putUser(this.user)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.status.status_code === 200) {
            this.$message({
              type: 'success',
              message: 'put成功!',
            });
          } else {
            this.$message.error('API Error');
          }
        })
        .catch((error) => {
          // 彈跳通知
          this.$message.error(error.message);
        });
    },

    deleteUser() {
      accountApi.deleteUser('Jason R')
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.status.status_code === 200) {
            this.$message({
              type: 'success',
              message: 'delete成功!',
            });
          } else {
            this.$message.error('API Error');
          }
        })
        .catch((error) => {
          // 彈跳通知
          this.$message.error(error.message);
        });
    },

    postUser() {
      accountApi.postUser(this.user)
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.status.status_code === 200) {
            this.$message({
              type: 'success',
              message: 'post成功!',
            });
          } else {
            this.$message.error('API Error');
          }
        })
        .catch((error) => {
          // 彈跳通知
          this.$message.error(error.message);
        });
    },

  },

};
</script>
<style scoped>
</style>
