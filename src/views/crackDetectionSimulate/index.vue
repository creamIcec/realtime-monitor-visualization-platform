<script>
import Button from './components/Button.vue'
import ControlPad from './components/ControlPad.vue'
import Header from './components/Header.vue'
import VideoCard from './components/VideoCard.vue'
import TrackingCard from './components/TrackingCard.vue'
import Popup from './components/Popup.vue'
import Switcher from './components/Switcher.vue'
import NotificationCard from './components/NotificationCard.vue'
import './lib/svg-inject'

import { MapHandler } from './app/map_handler'

const ak = '5gD6rxkR6DTV0vBEsitMD9KtQIwE580R';

async function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const scriptEl = document.createElement('script')
    scriptEl.type = 'text/javascript'
    scriptEl.src = src + '&callback=onLoaded'
    document.head.appendChild(scriptEl)
    scriptEl.onerror = reject
    resolve(scriptEl)
  })
}

export default {
  components: {
    Button,
    Header,
    VideoCard,
    TrackingCard,
    Popup,
    ControlPad,
    Switcher,
    NotificationCard
  },
  data() {
    return {
      currentTime: '',
      defaultTheme: 'night',
      notificationClass: ['notification-card']
    }
  },
  beforeMount() {
    loadExternalScript('https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=' + ak)
      .then((result) => {
        result.addEventListener('load', (e) => {
          this.loadMap()
        })
      })
    loadExternalScript('https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js')
      .then((result) => { })
  },
  mounted() {
    const controlPad = this.$refs.controlPad
    controlPad.toggle(0)
    this.updateTime()
    const leftArea = this.$refs.leftArea
    leftArea.setAttribute('theme', this.defaultTheme)
    document.documentElement.setAttribute('theme', 'night')
    const header = this.$refs.header
    header.theme = 'night'
  },
  methods: {
    updateTime() {
      setInterval(() => {
        this.currentTime = new Date().toLocaleString('zh-CN')
      }, 1000)
    },
    loadMap() {
      this.mapHandler = new MapHandler();
      this.mapHandler.init();
    },
    updateTheme(theme) {  //TODO: 类型检查
      if (theme != undefined && theme != "") {
        this.$refs.header.theme = theme;
        document.documentElement.setAttribute('theme', theme);
      }
    },
    startFetchPoints() {
      this.mapHandler.startFetchData();
    },
    hide(event) {
      const element = event.target.closest(".notification-card");
      element.style.visibility = "hidden";
    },
    dealCrackAction(event){
      const element = event.target.closest(".crack-info-panel");
      element.style.visibility = "hidden";
    }
  }
}
</script>

<template>
  <div id="index">
    <Header id="header" ref="header" :mapHandler="this.mapHandler" :mainContent="currentTime" subContent="天气" />
    <div id="content">
      <div id="map-content"></div>
      <!--地图内容--->
      <div id="widget-content">
        <!--非地图内容-->
        <div id="left-area" ref="leftArea" class="neumorphism">
          <div id="left-area-container">
            <Button id="navigator" pos="left" action="back" icon="./src/views/crackDetectionSimulate/resources/back.svg"
              :svgInject="true" />
            <!--返回按钮-->
            <Button id="display-control" pos="left" action="control path"
              icon="./src/views/crackDetectionSimulate/resources/path.svg" :svgInject="true"
              @click="startFetchPoints()" />
            <!--显示元素的控制按钮-->
            <Button id="menu-control" pos="left" action="menu"
              icon="./src/views/crackDetectionSimulate/resources/menu.svg" :svgInject="true" />
            <!--展开菜单控制-->
            <Button id="timeline-control" pos="left" action="timeline"
              icon="./src/views/crackDetectionSimulate/resources/timeline.svg" :svgInject="true" />
            <!--时间线控制-->
          </div>
          <ControlPad ref="controlPad" id="control-pad" type="vertical"
            icon1="./src/views/crackDetectionSimulate/resources/drone.svg"
            icon2="./src/views/crackDetectionSimulate/resources/car.svg" alt1="无人机" alt2="小车" :svgInject="true" />
        </div>
        <div class="notification-card-wrapper">
          <NotificationCard @click="hide" class="notification-card" id="notification-card-test-1" category="warn"
            content="在您不在线的时候，我们检测到了3处可疑裂痕" instruct="点击此对话框查看详情" />
          <!--TODO: unique id-->
          <NotificationCard @click="hide" class="notification-card" id="notification-card-test-2" category="alert"
            content="无法连接到巡检设备" instruct="点击此对话框查看详情" />
          <!--TODO: unique id-->
          <NotificationCard @click="hide" class="notification-card" id="notification-card-test-3" category="info"
            content="已计划定时重启, 下次重启在2023-12-10 23:59:59" instruct="点击此对话框查看详情" />
        </div>
        <!--TODO: unique id-->
        <!--<VideoCard id="video-card"/>-->
        <!--即时视频区域--->
        <TrackingCard class="data-tracking-pad" drone_name="测试无人机" />
        <!--TODO: vue的自定义元素内容方法-->
        <Popup />
        <!--展开菜单-->
        <!--TODO: vue的显示/隐藏元素的操作方法-->
        <div class="crack-info-panel" id="crack-info-panel" style="visibility: hidden;">
          <h2>发现裂痕</h2>
          <div style="display: flex; flex-direction: row; column-gap: 10px; justify-content: space-between;">
            <div style="display: flex; flex-direction: row; column-gap: 30px;">
              <div>
                <h3>位置</h3>
                <span>32.081119,118.647583</span>
              </div>
              <div>
                <h3>来自设备</h3>
                <span>测试无人机</span>
              </div>
            </div>
            <button
              style="width: 80px; height: 45px; background-color: #ff2123; border-radius: 10px; border: none;"
              @click="dealCrackAction">执行操作</button>
          </div>
          <img src="./resources/test0.jpg" style="width: 100%; height: 70%" />
        </div>
      </div>
    </div>
    <noscript>该应用程序需要使用Javascript,请允许Javascript运行。</noscript>
  </div>
</template>
<link rel="stylesheet" href="@/resources/main.css" />
<style scoped>
#index {
  width: 100%;
  height: 100%;
  position: absolute;
}

#header {
  pointer-events: all;
}

.crack-info-panel {
  width: 450px;
  height: 300px;
  position: absolute;
  bottom: 10px;
  left: 100px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  row-gap: 10px;
  background: linear-gradient(135deg, var(--card-color-start), var(--card-color-end)),
    linear-gradient(270deg, var(--card-color-end) 20%, var(--card-color-start) 80%);
  border-radius: 20px;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  overflow-y: hidden;
  z-index: 99;
  pointer-events: all;
}

.notification-card-wrapper {
  min-width: 300px;
  height: 40%;
  position: absolute;
  right: 0;
}

.notification-card {
  position: absolute;
  right: var(--right-area-pos);
  width: 300px;
  height: 85px;
  cursor: pointer;
  pointer-events: all;
}

#notification-card-test-1 {
  top: 10px;
}

#notification-card-test-2 {
  top: calc(10px + 85px);
  margin-top: 10px;
}

#notification-card-test-3 {
  top: calc(10px + 85px + 10px + 85px);
  margin-top: 10px;
}

#navigator {
  grid-row: 1;
}

#display-control {
  grid-row: 2;
}

#menu-control {
  grid-row: 3;
}

#timeline-control {
  grid-row: 7;
}

#content {
  width: 100%;
  height: 100%;
  position: absolute;
  /*border: 2px solid red;*/
}

#map-content {
  width: 100%;
  height: 100%;
}

#widget-content {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
  top: 100px;
  z-index: 99;
  pointer-events: none;
}

#left-area {
  width: var(--left-area-button-size);
  height: 60%;
  padding: var(--left-area-padding);
  position: absolute;
  margin-top: 1%;
  margin-left: 1%;
  justify-items: center;
  align-items: center;
  background: linear-gradient(135deg, var(--controller-color-start), var(--controller-color-end)),
    linear-gradient(270deg, var(--controller-color-end) 20%, var(--controller-color-start) 80%);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  pointer-events: all;
}

#left-area-container {
  width: calc(var(--left-area-button-size) - 2 * var(--left-area-padding));
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(6, calc(var(--left-area-button-size) - 2 * var(--left-area-padding))) calc(100% - 700px);
  row-gap: 5%;
}

#control-pad {
  position: absolute;
  bottom: -200px;
  left: 1px;
}

#video-card {
  position: absolute;
  right: var(--right-area-pos);
  top: 105px;
  margin-top: 10px;
  width: 300px;
  height: 300px;
}
</style>
<style>
* {
  font-family: '思源黑体 CN', 'Helvatica', 'Microsoft YaHei UI';
}

:root {
  /*Night mode color definition */
  --night-header-color-start: #04353f;
  --night-header-color-end: #081552;
  --night-card-color-start: #04353f;
  --night-card-color-end: #081552;
  --night-controller-color-start: #2c2f3480;
  --night-controller-color-end: #2c2f3480;
  --night-button-color: #ffffff00;
  --night-shadow-start: #cacccda0;
  --night-shadow-end: #06070970;
  --night-button-icon-color: #a7b8c4;
  --night-font-color: #ffffff;
  --night-tip-font-color: #fffccc;
  --night-warn-card-color: #e6a622;
  --night-alert-card-color: #e64f24;
  --night-info-card-color: #2591f0;

  /*Day mode color definition */
  --day-header-color-start: #ebebf2;
  /*#FFF3DA90;*/
  --day-header-color-end: #dff7f2;
  /*#fddcb690;*/
  --day-card-color-start: #ebebf2;
  --day-card-color-end: #dff7f2;
  --day-controller-color-start: #ecf0f380;
  /*#bdaaf060;*/
  --day-controller-color-end: #ecf0f380;
  /*#ab9aeb60;*/
  --day-button-color: #ffffff00;
  /*#ccb6ecaa;*/
  --day-shadow-start: #ffffffa0;
  /*#ecbcf1ee;*/
  --day-shadow-end: #758ea180;
  /*#bb6ec0ee;*/
  --day-button-icon-color: #263540;
  --day-font-color: #383531;
  --day-tip-font-color: #89837a;
  --day-warn-card-color: #e6d623;
  --day-alert-card-color: #eb6043;
  --day-info-card-color: #2fbdeb;

  --left-area-button-size: 70px;
  --left-area-padding: 10px;

  --header-top-pos: 25px;
  --right-area-pos: 20px;

  --top-button-size: 54px;
}

:root[theme='day'] {
  --header-color-start: var(--day-header-color-start);
  --header-color-end: var(--day-header-color-end);
  --card-color-start: var(--day-card-color-start);
  --card-color-end: var(--day-card-color-end);
  --controller-color-start: var(--day-controller-color-start);
  --controller-color-end: var(--day-controller-color-end);
  --button-color: var(--day-button-color);
  --shadow-start: var(--day-shadow-start);
  --shadow-end: var(--day-shadow-end);
  --font-color: var(--day-font-color);
  --tip-font-color: var(--day-tip-font-color);
  --button-icon-color: var(--day-button-icon-color);
  --warn-card-color: var(--day-warn-card-color);
  --alert-card-color: var(--day-alert-card-color);
  --info-card-color: var(--day-info-card-color);
}

:root[theme='night'] {
  --header-color-start: var(--night-header-color-start);
  --header-color-end: var(--night-header-color-end);
  --card-color-start: var(--night-card-color-start);
  --card-color-end: var(--night-card-color-end);
  --controller-color-start: var(--night-controller-color-start);
  --controller-color-end: var(--night-controller-color-end);
  --button-color: var(--night-button-color);
  --shadow-start: var(--night-shadow-start);
  --shadow-end: var(--night-shadow-end);
  --font-color: var(--night-font-color);
  --tip-font-color: var(--night-tip-font-color);
  --button-icon-color: var(--night-button-icon-color);
  --warn-card-color: var(--night-warn-card-color);
  --alert-card-color: var(--night-alert-card-color);
  --info-card-color: var(--night-info-card-color);
}

* {
  box-sizing: border-box;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.neumorphism {
  box-shadow:
    -3px -3px 3px -1px var(--shadow-start),
    3px 3px 3px -1px var(--shadow-end);
}

.svg-injected {
  fill: var(--button-icon-color);
}
</style>
