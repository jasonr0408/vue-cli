<template>
  <div :title="div_title">
    <br><br><br><br><br><br><br><br><br><br>
    <h1>{{ hello_message }}</h1>
    <el-button type="primary" @click="updateButton()">更新按钮</el-button>
    <el-button type="danger" @click="destroyButton()">刪除實體</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello_message: 'Hello, there welcome to VueJS world',
      div_title: 'This is my intro div',
    };
  },
  beforeCreate() {
    alert('Before Create');
  },
  created() {
    alert('Created');
  },
  beforeMount() {
    alert('Before Mount');
  },
  mounted() {
    alert('Mounted');
  },
  beforeUpdate() {
    alert('Before Update');
  },
  updated() {
    alert('Updated');
  },
  beforeDestroy() {
    alert('Before Destroy');
  },
  destroyed() {
    alert('Destroyed');
  },
  methods: {
    updateButton() {
      this.hello_message = 'update hello_message';
    },
    destroyButton() {
      this.$destroy();
    },
  },
};
</script>

<style scoped>
</style>
