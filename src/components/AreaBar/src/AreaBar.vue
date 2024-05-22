<script lang="ts" setup>
import BasicTitle from '@/components/Basic/src/BasicTitle.vue';
import { Space } from "ant-design-vue";
import { SpaceSize } from 'ant-design-vue/lib/space';
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  titleMessage: {
    type: String,
    default: ''
  }
});
const size : SpaceSize = 8;
</script>
<template>
  <div style="padding-bottom: 20px; font-weight: bolder;">
    <Space direction="horizontal" :size="size">
      <BasicTitle :help-message="props.titleMessage">
        {{ props.title }}
      </BasicTitle>
      <slot></slot>
    </Space>
  </div>
</template>
<style scoped></style>