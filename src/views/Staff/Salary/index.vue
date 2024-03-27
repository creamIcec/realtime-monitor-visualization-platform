<template>
  <div>
    <h1>教职工薪资管理</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="employeeID">员工ID：</label>
        <input type="text" id="employeeID" v-model="employeeID" required>
      </div>
      <div>
        <label for="salaryAmount">薪资金额：</label>
        <input type="number" id="salaryAmount" v-model="salaryAmount" required>
      </div>
      <div>
        <label for="paymentDate">发放日期：</label>
        <input type="date" id="paymentDate" v-model="paymentDate" required>
      </div>
      <div>
        <button type="submit">提交薪资</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeID: '',
      salaryAmount: null,
      paymentDate: ''
    };
  },
  methods: {
    submitForm() {
      // 在这里可以将数据发送给后端API进行处理
      console.log('提交表单:', this.employeeID, this.salaryAmount, this.paymentDate);
      // 你需要调用后端API来实际处理薪资数据
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
