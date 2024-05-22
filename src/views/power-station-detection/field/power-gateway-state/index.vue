<template>
  <div class="table-container">
    <div class="dropdown-container">
      <a-dropdown>
        <template #overlay>
          <a-menu @click="handleStatusClick">
            <a-menu-item key="Running">Running</a-menu-item>
            <a-menu-item key="Stopped">Stopped</a-menu-item>
            <a-menu-item key="Repairing">Repairing</a-menu-item>
          </a-menu>
        </template>
        <a-button> 运行状态 <DownOutlined /> </a-button>
      </a-dropdown>

      <a-dropdown>
        <template #overlay>
          <a-menu @click="handleModelClick">
            <a-menu-item key="Model X">Model X</a-menu-item>
            <a-menu-item key="Model Y">Model Y</a-menu-item>
            <a-menu-item key="Model Z">Model Z</a-menu-item>
          </a-menu>
        </template>
        <a-button> 设备型号 <DownOutlined /> </a-button>
      </a-dropdown>

      <a-dropdown>
        <template #overlay>
          <a-menu @click="handleStationClick">
            <a-menu-item key="Station A">Station A</a-menu-item>
            <a-menu-item key="Station B">Station B</a-menu-item>
            <a-menu-item key="Station C">Station C</a-menu-item>
            <a-menu-item key="Station D">Station D</a-menu-item>
          </a-menu>
        </template>
        <a-button> 对应电站 <DownOutlined /> </a-button>
      </a-dropdown>
    </div>
    <a-table :columns="columns" :data-source="filteredData" row-class-name="table-row" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { Table, Dropdown, Menu, Button } from 'ant-design-vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    'a-table': Table,
    'a-dropdown': Dropdown,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-button': Button,
    DownOutlined
  },
  data() {
    return {
      data: [
        { key: '1', serialNumber: '1', station: 'Station A', model: 'Model X', chargingPileCount: 10, status: 'Running' },
        { key: '2', serialNumber: '2', station: 'Station B', model: 'Model Y', chargingPileCount: 8, status: 'Stopped' },
        { key: '3', serialNumber: '3', station: 'Station C', model: 'Model Z', chargingPileCount: 12, status: 'Repairing' },
        { key: '4', serialNumber: '4', station: 'Station D', model: 'Model X', chargingPileCount: 1, status: 'Running' },
        { key: '5', serialNumber: '5', station: 'Station B', model: 'Model Y', chargingPileCount: 6, status: 'Repairing' },
        { key: '6', serialNumber: '6', station: 'Station C', model: 'Model Z', chargingPileCount: 4, status: 'Running' },
        { key: '7', serialNumber: '7', station: 'Station A', model: 'Model X', chargingPileCount: 10, status: 'Running' },
        { key: '8', serialNumber: '8', station: 'Station B', model: 'Model Y', chargingPileCount: 8, status: 'Stopped' },
        { key: '9', serialNumber: '9', station: 'Station D', model: 'Model Z', chargingPileCount: 12, status: 'Running' },
        { key: '10', serialNumber: '10', station: 'Station A', model: 'Model X', chargingPileCount: 10, status: 'Running' },
        { key: '11', serialNumber: '11', station: 'Station D', model: 'Model Y', chargingPileCount: 8, status: 'Repairing' },
        { key: '12', serialNumber: '12', station: 'Station C', model: 'Model Z', chargingPileCount: 12, status: 'Repairing' }
      ],
      columns: [
        { title: '序列号', dataIndex: 'serialNumber', key: 'serialNumber' },
        { title: '对应电站', dataIndex: 'station', key: 'station' },
        { title: '设备型号', dataIndex: 'model', key: 'model' },
        { title: '电桩数量', dataIndex: 'chargingPileCount', key: 'chargingPileCount' },
        { title: '运行状态', dataIndex: 'status', key: 'status' }
      ],
      filters: {
        status: null,
        model: null,
        station: null
      }
    }
  },
  computed: {
    filteredData() {
      return this.data.filter((item) => {
        const { status, model, station } = this.filters
        return (
          (status ? item.status === status : true) && (model ? item.model === model : true) && (station ? item.station === station : true)
        )
      })
    }
  },
  methods: {
    handleStatusClick({ key }) {
      this.filters.status = key
    },
    handleModelClick({ key }) {
      this.filters.model = key
    },
    handleStationClick({ key }) {
      this.filters.station = key
    }
  }
})
</script>

<style>
.table-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
}

.dropdown-container {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.ant-table-row {
  height: 40px; /* 设置每行的高度 */
}

.ant-table-cell {
  line-height: 40px;
}
</style>
