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
  import { RechargeDataEntry } from './types';
  const tempData = {
    titles:[
      "充值记录"
    ]
  };

  //MOCK DATA STARTED

  const dataSource : RechargeDataEntry[] = [];

  function getOrderId(baseId: string, idIndex: number) : string{  //100000
    return (parseInt(baseId) + idIndex).toString();
  }

  function getRandomUserId(length: number) : string{
    let resultArray : number[] = [];
    let i = 0;
    while(i < length){
      resultArray.push(Math.floor(Math.random() * 10));
      i++;
    }
    return resultArray.join('');
  }
  
  for(let i = 0; i < 20; i++){
    dataSource.push({
      key: (i+1).toString(),
      orderId: getOrderId('100000', i),
      userId: getRandomUserId(9),
      rechargedAmount: Math.floor(Math.random() * 1000),
      rechargeMethod: Math.random() < 0.5 ? '第三方支付' : '网站支付',
      rechargeTime: '2024-5-13' 
    })
  }
  

  //TODO: 表格全页面显示

  const tableColumns = [
    {
      title: '订单号',
      dataIndex: 'orderId',
      key: 'orderId'
    },
    {
      title: '用户标识符',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '充值金额',
      dataIndex: 'rechargedAmount',
      key: 'rechargedAmount'
    },
    {
      title: '充值方式',
      dataIndex: 'rechargeMethod',
      key: 'rechargeMethod'
    },
    {
      title: '充值时间',
      dataIndex: 'rechargeTime',
      key: 'rechargeTime'
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