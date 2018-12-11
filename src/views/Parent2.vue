<template>
  <div id="father">
    <div>
      <h1>我是父组件</h1>
      <Child :message="msg" @listenToChild="showChildMsg"></Child>
    </div>
  </div>
</template>

<script>
import Child from '@/components/Child2.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      msg: '等等會被子組件的回傳取代',
    };
  },
  methods: {
    showChildMsg(data) {
      this.msg = data;
    },
  },
};
</script>
<style scoped>
</style>
