<template>
    <div>
      <h1 v-show="true">v-show ：{{ msg1 }}</h1>
      <h1 v-if="msg2 === '1'">v-if ：{{ msg2 }}</h1>
      <h1 v-else-if="msg2 === '2'">v-else-if ：{{ msg2 }}</h1>
      <h1 v-else>v-else ：{{ msg2 }}</h1>
    <el-button type="primary" @click="updateButton()">更新按钮</el-button>
    <el-button type="primary" @click="updateButton2()">更新按钮2</el-button>
      <h1>status ：{{ status }}</h1>
        <el-select v-model="status" placeholder="請選擇">
            <el-option
            v-for="item in status_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: 'hello world',
      msg2: '0',
      status: '',
      status_options: [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '停壓',
        },
        {
          value: '3',
          label: '啟用',
        },
        {
          value: '4',
          label: '停用',
        },
      ],
    };
  },
  computed: {
    // msg2() {
    //   return this.msg1.split('').reverse().join('');
    // },
  },
  methods: {
    updateButton() {
      this.msg2 = '1';
    },
    updateButton2() {
      this.msg2 = '2';
    },
  },
};
</script>

<style scoped>
</style>
