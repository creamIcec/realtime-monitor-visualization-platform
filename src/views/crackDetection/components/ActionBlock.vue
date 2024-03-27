<script>
import '../css/layout.css';

export default{
  props:{
    Title:{
      type: String,
      required: true
    },
    Icon:{
      type: String,
      required: false,
      default: "../images/f1.jpg"
    }
  }
}
</script>
<template>
    <li class="lan">
      <div class="light-b img rounded">
        <h2>{{ Title }}</h2>
        <div class="icon"></div>
      </div>
      <span><img :src="Icon" width="226" height="158"></span>
    </li>
</template>
<style scoped>
.rounded{
  border-radius: 12px;
}
</style>