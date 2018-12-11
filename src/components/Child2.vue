<template>
  <div>
    <h1>我是子組件</h1>
    <p>{{ message }}</p>
    <el-button type="primary" @click="SendToParent">向父組件傳值</el-button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    SendToParent() {
      this.$emit('listenToChild', 'send to parent message');
    },
  },
};
</script>

<style scoped>
</style>
