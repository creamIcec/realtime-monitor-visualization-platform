<template>
  <div class="echarts">
    <div :style="{ height: props.height, width: props.width }" ref="myEchart"></div>
  </div>
</template>
<script setup lang="ts">
import { useECharts } from '@/hooks/web/useECharts';
import { onMounted, ref, Ref } from "vue";
const props = defineProps({
  width: { type: String, default: "1000px" },
  height: { type: String, default: "500px" }
});
const tempData = {
  data: [
    { "name": "俄罗斯", "value": 1707.5 },
    { "name": "加拿大", "value": 997.1 },
    { "name": "中国", "value": 960.1 },
    { "name": "美国", "value": 936.4 },
  ]
}
const mapRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(mapRef as Ref<HTMLDivElement>);

onMounted(() => {
  setOptions({
    backgroundColor: "#02AFDB",
    title: {    //地图显示标题
      text: '全球国家面积排行榜',
      subtext: 'Global ranking of country area',
      sublink: 'http://www.baidu.com',
      top: "30px",
      left: 'center',
      textStyle: { color: '#fff' }
    },
    visualMap: {   //图列显示柱
      type: 'continuous',
      min: 0,
      left: 30,
      max: 2000,
      text: ['大', '小'],
      realtime: false,
      calculable: true,
      color: ['orangered', 'yellow', 'lightskyblue']
    },
    toolbox: {  //工具栏
      show: false,
      orient: 'vertical',
      top: 50,
      itemGap: 20,
      left: 30,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    tooltip: {  //提示框组件
      trigger: 'item',
      formatter: '{b}<br/>{c} 万平方公里'
    },
    series: [{
      name: "国家面积",
      type: 'map',
      mapType: 'world',
      roam: true,
      mapLocation: { y: 100 },
      data: tempData.data,   //绑定数据
      nameMap: {
        'Russia': '俄罗斯',
        'Canada': '加拿大',
        'China': '中国',
        'United States': '美国',
      },
      symbolSize: 12,
      label: {
        normal: { show: false },
        emphasis: { show: false }
      },
      itemStyle: {
        emphasis: {
          borderColor: '#fff',
          borderWidth: 1
        }
      }
    }],
  });
})
</script>
<style scope></style>