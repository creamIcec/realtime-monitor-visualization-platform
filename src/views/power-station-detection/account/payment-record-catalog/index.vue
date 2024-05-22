<template>
  <div class="page-wrapper">
    <AreaBar :title-message="tempData.titles[0]" :title="tempData.titles[0]" class="areabar">
      <div class="areabar-operation">
        <RangePicker format="YYYY/MM/DD" picker="year"></RangePicker>
        <DropdownButton>选择操作</DropdownButton>
      </div>
    </AreaBar>
    <Table :data-source="dataSource" :columns="tableColumns" class="full-page-table">
      <!--
        <template #headerCell="{ column }">
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
</template>
-->
    </Table>
  </div>
</template>
<script setup lang="ts">
import { AreaBar } from '@/components/AreaBar';
import { DropdownButton, RangePicker, Table } from "ant-design-vue";
import { getPaymentRecordsMock } from '../mock-utils';
import { PaymentDataEntry } from '../types';
const tempData = {
  titles: [
    "消费记录"
  ]
};

//MOCK DATA START

const dataSource: PaymentDataEntry[] = getPaymentRecordsMock();

//MOCK DATA END

//TODO: 表格全页面显示

const tableColumns = [
  {
    title: '单号',
    dataIndex: 'orderId',
    key: 'orderId'
  },
  {
    title: '用户标识符',
    dataIndex: 'userId',
    key: 'userId'
  },
  {
    title: '消费金额',
    dataIndex: 'consumed',
    key: 'consumed'
  },
  {
    title: '车牌号',
    dataIndex: 'carLicenseNumber',
    key: 'carLicenseNumber'
  },
  {
    title: '电桩ID',
    dataIndex: 'chargerId',
    key: 'chargerId'
  },
  {
    title: '枪号',
    dataIndex: 'pileId',
    key: 'pileId'
  },
  {
    title: '建单时间',
    dataIndex: 'orderRequestTime',
    key: 'orderRequestTime'
  },
  {
    title: '结算时间',
    dataIndex: 'orderCompleteTime',
    key: 'orderCompleteTime'
  },
  {
    title: '电量',
    dataIndex: 'powerConsumed',
    key: 'powerConsumed'
  },
  {
    title: '实付金额',
    dataIndex: 'actualPaymentAmount',
    key: 'actualPaymentAmount'
  },
  {
    title: '停止码',
    dataIndex: 'stopCode',
    key: 'stopCode'
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
.full-page-table {
  width: 100%;
  height: 100%;
}

.table-cell {
  min-width: 200px;
  height: fit-content;
  width: fit-content;
}

.areabar {
  position: relative;
  width: 100%;
  padding: 10px;
}

.areabar-operation {
  position: absolute;
  right: 0;
}
</style>