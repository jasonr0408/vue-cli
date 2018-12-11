<template>
  <div>
    <p>我是子组件</p>
    <p>智力： {{ wisdom }}</p>
    <p>膜法： {{ magic }}</p>
    <p>攻击： {{ attack }}</p>
    <p>防御： {{ defense }}</p>
    <el-button type="primary" @click="increment('wisdom')">增加智力</el-button>
    <el-button type="primary" @click="increment('magic')">增加膜法</el-button>
    <el-button type="primary" @click="increment('attack')">增加攻击</el-button>
    <el-button type="primary" @click="increment('defense')">增加防御</el-button>
  </div>
</template>

<script>
export default {
  props: {
    wisdom: {
      type: Number,
      required: true,
    },
    magic: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    defense: {
      type: Number,
      required: true,
    },
  },

  methods: {
    increment(dataName) {
    //   this[dataName] = this[dataName] + 1;
      const newValue = this[dataName] + 1;
      this.$emit(`update:${dataName}`, newValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   button { float: left }
</style>
