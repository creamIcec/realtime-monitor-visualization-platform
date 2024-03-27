<script setup>
defineProps({
  action: {
    type: String,
    required: true
  }
})
</script>
<template>
  <div class="left-buttons button-wrapper">
    <button class="control-buttons half-height button-background">{{ action }}</button>
  </div>
</template>
<style>
@media (max-width: 580px) {
  .left-buttons {
    width: 50px;
    height: 100px;
  }

  .control-buttons {
    border: none;
    background-color: transparent;
  }

  .button-background {
    background-position: center;
    background-repeat: no-repeat;
  }
}

.half-height {
  height: 50%;
}

.left-buttons {
  width: 80px;
  height: 160px;
  pointer-events: all;
  left: 20px;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.control-buttons {
  border-style: none;
  border-radius: 100%;
  /*border-color: #031b51;*/
  background-color: #4477ce;
  box-shadow: 1px 1px 8px 1px #5f92ea;
  outline: none;
  cursor: pointer;
  z-index: 99;
}
</style>
