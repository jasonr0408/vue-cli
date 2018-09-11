<template>
  <div>
    <h1>我是子組件</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
</style>
