<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import app from '../main'; // import the instance

export default {
  data() {
    return {
      msg: 'hello world jr',
    };
  },
  created() {
    app.$Progress.start(10);
  },
};
</script>

<style scoped>
</style>
