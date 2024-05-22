<template>
  <div>
    <div ref="chartRef" :style="{height, width}"></div>
  </div>
</template>
<script setup lang="ts">
import { basicProps } from "./props";
import { useECharts } from '@/hooks/web/useECharts';
import { onMounted, ref, Ref } from "vue";

defineProps({
  ...basicProps
});
const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

onMounted(() => {
  setOptions({
    title:{
      text: '累计充电次数趋势'
    },
    tooltip:{
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          width: 1,
          color: '#019680'
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [...new Array(8)].map((_item, index) => `${index + 2016}`),
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          type: 'solid',
          color: 'rgba(226,226,226,0.5)'
        }
      },
      axisTick: {
        show: false
      }
    },
    yAxis: [
      {
        type: 'value',
        max: 60,
        splitNumber: 6,
        axisTick: {
          show: false
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)']
          }
        }
      }
    ],
    grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
    series: [
      {
        smooth: false,
        data: [22, 24, 16, 27, 28, 28, 29, 54, 58],
        type: 'line',
        areaStyle: {},
        itemStyle: {
          color: '#5ab1ef'
        }
      }
    ]
  })
});
</script>
<style scoped></style>