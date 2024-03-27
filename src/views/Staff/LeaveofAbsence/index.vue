<template>
  <div>
    <h1>请假申请</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="employeeName">员工姓名：</label>
        <input type="text" id="employeeName" v-model="employeeName" required>
      </div>
      <div>
        <label for="leaveType">请假类型：</label>
        <select id="leaveType" v-model="leaveType" required>
          <option value="病假">病假</option>
          <option value="年假">年假</option>
          <option value="事假">事假</option>
          <option value="调休">调休</option>
        </select>
      </div>
      <div>
        <label for="leaveStartDate">开始日期：</label>
        <input type="date" id="leaveStartDate" v-model="leaveStartDate" required>
      </div>
      <div>
        <label for="leaveEndDate">结束日期：</label>
        <input type="date" id="leaveEndDate" v-model="leaveEndDate" required>
      </div>
      <div>
        <button type="submit">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeName: '',
      leaveType: '病假',
      leaveStartDate: '',
      leaveEndDate: ''
    };
  },
  methods: {
    submitForm() {
      // 在这里可以将数据发送给后端API进行处理
      console.log('提交表单:', this.employeeName, this.leaveType, this.leaveStartDate, this.leaveEndDate);
      // 你需要调用后端API来实际处理请假申请
      // 例如：使用 axios 或 fetch 发送 POST 请求
    }
  }
};
</script>

<style>
/* 样式可以根据你的需要进行修改和添加 */
label {
  display: block;
  margin-bottom: 5px;
}
input, select {
  width: 200px;
  margin-bottom: 10px;
}
button {
  padding: 8px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
