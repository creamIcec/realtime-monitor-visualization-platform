<script>
import { Card, Button } from "ant-design-vue"
//import { Input } from "ant-design-vue";
import { ref } from "vue"
export default{
  setup(){
    const size = ref('small');
    const type = ref('link');
    return {size, type}
  },
  methods:{
    goToNewPage(router) {
      this.$router.push(router);
    }
  }
}
</script>
<template>
  <div>
    <a-button type="link" size="large" @click="goToNewPage('/more')">更多>></a-button>
    <a-input placeholder="Basic usage"/>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.imgs {
  background-color: #cccccc;
  display: flex;
  justify-content: space-around;
}

.data {
  background-color: #cccccc;
  display: flex;
  justify-content: space-around;
}

img {
  width: 25vh;
  height: auto;
}

h1 {
  font-size: 24px;
}
</style>