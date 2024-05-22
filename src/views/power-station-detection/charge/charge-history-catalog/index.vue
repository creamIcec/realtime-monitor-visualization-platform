<script lang="ts" setup>
import { AreaBar } from '@/components/AreaBar';
import { RangePicker, Statistic } from 'ant-design-vue';

import { Button, Card, Col, Row } from 'ant-design-vue';
import { computed } from 'vue';

import { DataTuple } from "@/types/extra";
import { valueType } from 'ant-design-vue/lib/statistic/utils';

import MapProvider from './components/map-provider.vue';
import Statistics from "./components/statistics.vue";

const dateFormat = "YYYY/MM/DD";
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  dataTitles: {
    type: Array<String>,
    default: [''],
    required: false   //temp
  },
  dataContents: {
    type: Array<String | Number>,
    default: [''],
    required: false   //temp
  }
});

const tempData = {
  dataTitles: [
    "累计充电度数",
    "累计充电次数",
    "累计充电时长",
    "累计充电金额"
  ],
  dataContents: [
    "1650024",
    "63882",
    "82537",
    "1300523"
  ],
  titles: [
    "基本数据",
    "统计图",
    "快速操作",
    "来源分布地图"
  ],
  fastOperations: [
    [
      "导出统计数据",
      "进入数字孪生",
    ],
    [
      "进入财务管理",
      "进入场地管理",
    ],
    [
      "进入充电管理",
      "打开用户手册"
    ]
  ]
};

const contents = computed(() => {
  const result: DataTuple[] = [];
  let i = 0;
  while (i < tempData.dataContents.length) {
    result.push({ description: tempData.dataTitles[i], value: tempData.dataContents[i] });
    i++;
  }
  return result;
})
</script>
<template>
  <div class="page-wrapper">
    <div class="field-state-basic-data">
      <AreaBar :title-message="tempData.titles[0]" :title="tempData.titles[0]">
        <RangePicker :format="dateFormat"/>
      </AreaBar>
      <div class="statistic-data-container">
        <Card v-for="tuple in contents">
          <Statistic :title="tuple.description" :value="tuple.value as valueType" :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px" />
        </Card>
      </div>
    </div>
    <div class="field-state-statistics">
      <AreaBar :title-message="tempData.titles[1]" :title="tempData.titles[1]"></AreaBar>
      <div>
        <Card>
          <Statistics></Statistics>
        </Card>
        <div class="two-elements-wrapper" style="padding: 10px;">
          <span>选择时间段</span>
          <RangePicker picker="year"/>
        </div>
      </div>
    </div>
    <div class="field-state-fast-operation">
      <AreaBar :title-message="tempData.titles[2]" :title="tempData.titles[2]"></AreaBar>
      <Card>
        <Row v-for="rowItem in tempData.fastOperations">
          <Col v-for="columnItem in rowItem">
            <Card>
              <Button size="large">{{ columnItem }}</Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
    <div class="field-state-map">
      <AreaBar :title-message="tempData.titles[3]" :title="tempData.titles[3]"></AreaBar>
      <Card>
          <MapProvider></MapProvider>
      </Card>
    </div>
  </div>
</template>
<style scoped>
.page-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  column-gap: 50px;
  row-gap: 50px;
  padding: 10px;
}
.statistic-data-container{
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  justify-content: space-around;
  padding: 20px;
}
.field-state-basic-data{
  width: 100%;
  height: 200px;
}
.field-state-fast-operation{
  width: fit-content;
  height: 600px;
}
.field-state-statistics{
  width: 600px;
  height: 600px;
}
.field-state-map{
  width: 300px;
  height: 600px;
}
.two-elements-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  column-gap: 10px;
}
</style>