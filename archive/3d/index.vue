<!-- eslint-disable prettier/prettier -->
<script>
import Button from './components/Button.vue';
import Header from './components/Header.vue';
import VideoCard from './components/VideoCard.vue';
import TrackingCard from './components/TrackingCard.vue';
import Popup from './components/Popup.vue';
import { loadMap } from "./app/point_processor";
function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    window.onLoaded = resolve;
    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.src = src + "&callback=onLoaded";
    document.head.appendChild(scriptEl);
    scriptEl.onerror = reject;
  });
}
const ak = "5gD6rxkR6DTV0vBEsitMD9KtQIwE580R";    //TODO: 加密ak
export default {
  components: {
    Button,
    Header,
    VideoCard,
    TrackingCard,
    Popup
  },
  beforeMount() {
    loadExternalScript('https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=' + ak);
    loadExternalScript('https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js');
  },
  mounted() {
    loadMap();
  }
}
</script>

<template>
  <div>
    <Header title="无人机3D实时监控平台" />
    <div id="content">
      <div id="map-content"></div>
      <!--地图内容--->
      <div id="widget-content">
        <!--非地图内容-->
        <div id="left-area">
          <Button id="navigator" action="back" />
          <!--返回按钮-->
          <Button id="display-control" action="control path" />
          <!--显示元素的控制按钮-->
          <Button id="menu-control" action="menu" />
          <!--展开菜单控制-->
          <Button id="timeline-control" action="timeline" />
          <!--时间线控制-->
        </div>
        <VideoCard />
        <!--即时视频区域--->
        <TrackingCard />
        <!--TODO: vue的自定义元素内容方法-->
        <Popup />
        <!--展开菜单-->
        <!--TODO: vue的显示/隐藏元素的操作方法-->
      </div>
    </div>
    <noscript>该应用程序需要使用Javascript,请允许Javascript运行。</noscript>
  </div>
</template>
<link rel="stylesheet" href="./resources/main.css" />
<style scoped>
#content {
  width: 100%;
  height: 100%;
  position: fixed;
  /*border: 2px solid red;*/
}

#map-content {
  width: 100%;
  height: 100%;
}

#widget-content {
  width: 100%;
  height: calc(100% - 100px);
  position: fixed;
  top: 100px;
  z-index: 99;
  pointer-events: none;
}

#left-area {
  width: 100px;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, 120px) calc(100% - 800px);
  justify-items: center;
  align-items: center;
}
</style>
