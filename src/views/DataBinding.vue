<template>
    <div>
      <h1>msg1 ：{{ msg1 }}</h1>
      <h1>msg2 ：{{ msg2 }}</h1>
    <el-button type="primary" @click="updateButton()">更新按钮</el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: 'hello world',
    };
  },
  computed: {
    msg2() {
      return this.msg1.split('').reverse().join('');
    },
  },
  methods: {
    updateButton() {
      this.msg1 = 'update msg1';
    },
  },
};
</script>

<style scoped>
</style>
