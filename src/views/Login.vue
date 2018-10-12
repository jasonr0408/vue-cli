<template>
  <div class="login-box">
    <h1>Smile Gaming 客端</h1>
    <el-form ref="form" :rules="form_rules" :model="form" @submit.native.prevent="login" >
      <el-form-item prop="username">
        <el-input :autofocus="true" v-model="form.username" :type="usernameInputType" name="username" placeholder="帳號" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="密碼"/>
      </el-form-item>
      <el-form-item>
        <el-button :disabled="now_login" native-type="submit" type="warning" size="large">
          登入
          <template v-if="now_login">
            中...
          </template>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Login',
  data() {
    const validateAccount = (rule, value, callback) => {
      const regExp = /^[A-Za-z0-9]+$/;
      // console.log(regExp.test(value));
      if (value === '') {
        callback(new Error('請輸入帳號'));
      } else if (regExp.test(value) === false) {
        callback(new Error('請輸入英文數字'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      const regExp = /^[A-Za-z0-9]+$/;
      if (value === '') {
        callback(new Error('請輸入密碼'));
      } else if (regExp.test(value) === false) {
        callback(new Error('請輸入英文數字'));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: '',
        password: '',
      },
      now_login: false,
      form_rules: {
        username: [
          { validator: validateAccount, trigger: 'blur' },
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
    usernameInputType() {
      const supportIMEMode = ('imeMode' in document.body.style) || ('ime-mode' in document.body.style);
      const isDesktop = /(Windows NT|Macintosh|Linux)/i.test(navigator.userAgent);
      return !supportIMEMode && isDesktop ? 'tel' : 'text';
    },
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.now_login = true;
          store.dispatch('Login', this.form)
            .then((resp) => {
              // 帳密正確
              if (resp.data.result) {
                this.$router.push('/home');
              // php錯誤
              } else if (resp.data.message) {
                this.$notify.error({
                  title: 'Error',
                  message: `${resp.data.message}`,
                  duration: 0,
                });
              // 登入失敗
              } else {
                this.$message.error('登入失敗');
              }
            })
            .catch((resp) => {
              this.$message.error(resp);
            })
            .then(() => {
              setTimeout(() => { this.now_login = false; }, 800);
            });
        } else {
          this.$message.error('請修正錯誤欄位');
        }
      });
    },

  },
};
</script>

<style scoped>
.login-box {
  width: 300px;
  margin: 100px auto 0;
  padding: 36px;
  background-color: #eef1f6;
  border-radius: 4px;
  box-shadow: 0 6px 6px rgba(0,0,0,.117647), 0 4px 4px rgba(0,0,0,.117647);
}

.el-button {
  width: 100%;
}

</style>

<style>
input[name="username"] {
  ime-mode: disabled;
  text-transform: lowercase;
}
</style>
