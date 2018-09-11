<template>
  <div id="father">
    <div>
       <h1>我是父组件</h1>
      <Child message="hallo"></Child>
    </div>
  </div>
</template>

<script>
import Child from '@/components/Child1.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>
