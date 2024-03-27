<template>
  <div>
    <h1>聘期管理</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="employeeName">员工姓名：</label>
        <input type="text" id="employeeName" v-model="employeeName" required>
      </div>
      <div>
        <label for="hireDate">入职日期：</label>
        <input type="date" id="hireDate" v-model="hireDate" required>
      </div>
      <div>
        <label for="probationPeriod">聘期时长（月）：</label>
        <input type="number" id="probationPeriod" v-model="probationPeriod" required>
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
      hireDate: '',
      probationPeriod: null
    };
  },
  methods: {
    submitForm() {
      // 在这里可以将数据发送给后端API进行处理
      console.log('提交表单:', this.employeeName, this.hireDate, this.probationPeriod);
      // 你需要调用后端API来实际处理聘期数据
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
input {
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
