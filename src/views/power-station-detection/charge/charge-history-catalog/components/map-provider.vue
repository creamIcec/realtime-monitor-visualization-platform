<template>
  <div>
    <div id="main" style="width: 500px; height: 500px" ref="mapRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import { useECharts } from '@/hooks/web/useECharts';
import './map-data/100000_full.json';

const mapRef = ref < HTMLDivElement | null > (null);
const { setOptions } = useECharts(mapRef as Ref<HTMLDivElement>);

onMounted(() => {
  setOptions({
    title: {
      text: '地图',
      left: 'center'
    },
    series: [
      {
        name: '地图',
        map: 'china',
        type: 'map',
        data: [], // 添加你的数据项
      }
    ]
  });
});
</script>
