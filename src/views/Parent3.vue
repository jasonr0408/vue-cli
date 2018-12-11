<template>
  <div id="father">
    <div>
      我是父组件
      <Child
        :wisdom.sync="wisdom"
        :magic.sync="magic"
        :attack.sync="attack"
        :defense.sync="defense">
      </Child>
      <p>智力： {{ wisdom }}</p>
      <p>膜法： {{ magic }}</p>
      <p>攻击： {{ attack }}</p>
      <p>防御： {{ defense }}</p>
    </div>
    <el-button type="danger">送出資料</el-button>
  </div>
</template>

<script>
import Child from '@/components/Child3.vue';

export default {
  components: {
    Child,
  },
  data() {
    return {
      wisdom: 90,
      magic: 160,
      attack: 100,
      defense: 80,
    };
  },
};

</script>

<style scoped>
#father div {
  padding: 10px;
  margin: 10px;
  border: 1px solid grey;
  overflow: hidden;
}
</style>
