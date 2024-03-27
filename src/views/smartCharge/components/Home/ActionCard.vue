<script>
export default{
  props:{
    Title:{
      type: String,
      default: "采取行动",
      required: true
    },
    Description:{
      type:String,
      default: "行动描述",
      required: false
    }
  }
}
</script>
<template>
  <div class="action-card-container">
    <h1>{{ Title }}</h1>
    <p>{{ Description }}</p>
  </div>
</template>
<style scoped>
  *{
    color: #222;
  }
  h1{
    font-size: 32px;
    font-weight: bolder;
  }
  p{
    font-size: 18px;
  }
  .action-card-container{
     background-color: #1199ee;
     border-radius: 12px;
  }
  .action-card-container{
    padding: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>