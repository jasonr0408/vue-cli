<template>
    <div>
      <h1>msg1 ：{{ msg1 }}</h1>
      <h1>msg2 ：{{ msg2 }}</h1>
      <el-button type="primary" @click="updateButton()">更新按钮</el-button>
      <br>
      <br>
      <br>
      <el-input v-model="firstName" placeholder="请输入内容"></el-input>
      <el-input v-model="lastName" placeholder="请输入内容"></el-input>
      <p>fullName (computed)：{{fullName}}  </p>
      <p>fullNameCombined (watch)： {{fullNameCombined}} </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: 'hello world',
      firstName: 'Bill',
      lastName: 'Chen',
      fullNameCombined: 'Bill Chen',
    };
  },
  computed: {
    msg2() {
      return this.msg1.split('').reverse().join('');
    },
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    updateButton() {
      this.msg1 = 'update msg1';
    },
  },
  watch: {
    firstName() {
      this.fullNameCombined = `${this.firstName} ${this.lastName}`;
    },
    lastName() {
      this.fullNameCombined = `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<style scoped>
</style>
