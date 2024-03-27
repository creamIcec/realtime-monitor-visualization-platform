<template>
  <div>
    <iframe src="https://www.gaoxiaojob.com/" width="100%" height="600"></iframe>
  </div>
</template>

<script>
export default {
  name: 'EmbedPage',
  // 这里可能需要在生命周期钩子中处理
  mounted() {
    // 可以在这里添加一些逻辑，比如监听 iframe 内部事件等
  }
}
</script>

<style>
/* 可以添加一些样式来控制 iframe 的外观 */
iframe {
  border: none;
  width: 100%;
  height: 600px;
}
</style>
