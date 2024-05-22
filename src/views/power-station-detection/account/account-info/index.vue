<template>
  <div class="page-wrapper">
    <AreaBar :title-message="tempData.titles[0]" :title="tempData.titles[0]" class="areabar">
      <div class="areabar-operation">
        <RangePicker format="YYYY/MM/DD" picker="year"></RangePicker>
        <DropdownButton>选择操作</DropdownButton>
      </div>
    </AreaBar>
    <Table 
    :data-source="dataSource" 
    :columns="tableColumns"
    class="full-page-table"
    >
      <!--<template #headerCell="{ column }">
        <template>
          <div class="table-cell">
            {{ column.key }}
          </div>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template>
          <div class="table-cell">
            {{ record.name }}
          </div>
        </template>
      </template>-->
    </Table>
  </div>  
</template>
<script setup lang="ts">
  import { AreaBar } from '@/components/AreaBar';
  import { DropdownButton, RangePicker, Table } from "ant-design-vue";
  //import { ref } from 'vue';
  import { AccountInfoEntry } from '../types';
  import { getAccountInfoMock } from '../mock-utils';
  const tempData = {
    titles:[
      "账户信息"
    ]
  };

  //MOCK DATA START

  const dataSource : AccountInfoEntry[] = getAccountInfoMock();

  //MOCK DATA END
  

  //TODO: 表格全页面显示
  

  const tableColumns = [
    {
      title: '用户标识符',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '注册时间',
      dataIndex: 'signUpTime',
      key: 'signUpTime'
    },
    {
      title: '余额',
      dataIndex: 'purse',
      key: 'purse'
    },
    {
      title: '优惠券信息',
      dataIndex: 'couponInfo',
      key: 'couponInfo'
    }
  ];

  //const dataSourceRef = ref(dataSource);

  //MOCK DATA END

  /*const { 
    setCurrentPage,
    setPageSize,
    getTotal,
    getPaginationList
  } = usePagination(dataSourceRef, 10);

  const pagination : ComputedRef<TablePaginationConfig> = computed<TablePaginationConfig>(() => ({
    total: 200,
    current: getTotal,
    pageSize: getPaginationList.value
  }));
  */
</script>
<style scoped>
.full-page-table{
  width: 100%;
  height: 100%;
}
.table-cell{
  min-width: 200px;
  height: fit-content;
  width: fit-content;
}
.areabar{
  position: relative;
  width: 100%;
  padding: 10px;
}
.areabar-operation{
  position: absolute;
  right: 0;
}
</style>