<template>
  <div>
    <div class="title">
      <div>
        <h1>统计数据</h1>
      </div>
      <div>
        <p>当前温度：{{ Data.tempureture }}度 当前湿度：{{ Data.humidity }}%</p>
      </div>
    </div>
    <div class="monitor">
      <div class="title">
        <div>
          <h2>监控图像概览：</h2>
        </div>
        <div>
          <Button :type="type" :size="size" @click="goToNewPage('/more')">更多>></Button>
        </div>

      </div>
      <div class="imgs">
        <img :src="Data.img.img1" alt="No Signal">
        <img :src="Data.img.img2" alt="No Signal">
        <img :src="Data.img.img3" alt="No Signal">
        <img :src="Data.img.img4" alt="No Signal">
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "ant-design-vue"
import { ref } from "vue"

export default {
  data() {
    return {
      Data: null,
    }
  },
  created() {
    this.Data = {
      tempureture: 20,
      humidity: 75,
      img: {
        img1: 'src/views/electricPile/electricPileManagement/img/house-753270_1920.jpg',
        img2: 'src/views/electricPile/electricPileManagement/img/pexels-felixmittermeier-956981.jpg',
        img3: 'src/views/electricPile/electricPileManagement/img/pexels-pixabay-326055.jpg',
        img4: 'src/views/electricPile/electricPileManagement/img/pexels-michal-osinski-1863102-3454270.jpg'
      }
    }
  },
  methods: {
    goToNewPage(router) {
      this.$router.push(router);
    },
  },
  mounted() {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  setup() {
    const size = ref('small');
    const type = ref('link');
    return { size, type };
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.imgs {
  display: flex;
  justify-content: space-around;
}

img {
  width: 25vh;
  height: auto;
}
</style>