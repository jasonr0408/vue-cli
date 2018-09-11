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
      msg: '我從父組件丟過去的',
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
