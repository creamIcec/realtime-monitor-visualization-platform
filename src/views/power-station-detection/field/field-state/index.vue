<template>
  <div>
    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="Running">运营中的场地</a-menu-item>
          <a-menu-item key="Stopped">未开放的场地</a-menu-item>
        </a-menu>
      </template>
      <a-button> 场地切换 <DownOutlined /> </a-button>
    </a-dropdown>
    <div class="venue-container">
      <div v-if="selectedType === 'Running'" class="venue-content">
        <!-- 运营中的场地内容 -->
        <img src="/resource/img/mock/map/Running.jpg" alt="运营中的场地" />
      </div>
      <div v-else-if="selectedType === 'Stopped'" class="venue-content">
        <!-- 未开放的场地内容 -->
        <img src="/resource/img/mock/map/Stopped.jpg" alt="未开放的场地" />
      </div>
      <div class="notification-list">
        <a-list item-layout="horizontal" :data-source="notifications">
          <template #renderItem="{ item }">
            <a-list-item>
              <a-list-item-meta>
                <template #title>
                  <a :href="item.link">{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { Dropdown, Menu, Button, List, Avatar } from 'ant-design-vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    'a-dropdown': Dropdown,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-button': Button,
    'a-list': List,
    'a-list-item': List.Item,
    'a-list-item-meta': List.Item.Meta,
    'a-avatar': Avatar,
    DownOutlined
  },
  data() {
    return {
      selectedType: 'Running', // 默认展示运营中的场地内容
      notifications: [
        {
          title: '严重警告：XX场地即将关闭'
        },
        {
          title: '警告：XX场地使用时间已超过规定时间'
        },
        {
          title: '通知：XX场地维护将于下周一开始，请提前安排'
        },
        {
          title: '通知：XX场地将于本周五进行清洁，请提前安排工作'
        },
        {
          title: '通知：XX场地将于明天进行维修，届时将暂停使用'
        },
        {
          title: '警告：XX场地尚未开放'
        },
        {
          title: '严重警告：XX场地发生火灾'
        }
      ]
    }
  },
  methods: {
    handleMenuClick({ key }) {
      this.selectedType = key
    }
  }
})
</script>

<style>
img {
  width: 100%;
  max-width: 500px;
  margin: 10px 0;
}

.venue-container {
  display: flex;
}

.venue-content {
  flex: 1;
  padding-right: 20px;
}

.notification-list {
  flex: 1;
}
</style>
