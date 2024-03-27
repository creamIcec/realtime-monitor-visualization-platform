<template>
  <div>
    <h1>教职工考核</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="employeeID">员工ID：</label>
        <input type="text" id="employeeID" v-model="employeeID" required>
      </div>
      <div>
        <label for="assessmentDate">考核日期：</label>
        <input type="date" id="assessmentDate" v-model="assessmentDate" required>
      </div>
      <div>
        <label for="assessmentResult">考核结果：</label>
        <textarea id="assessmentResult" v-model="assessmentResult" required></textarea>
      </div>
      <div>
        <button type="submit">提交考核</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employeeID: '',
      assessmentDate: '',
      assessmentResult: ''
    };
  },
  methods: {
    submitForm() {
      // 在这里可以将数据发送给后端API进行处理
      console.log('提交表单:', this.employeeID, this.assessmentDate, this.assessmentResult);
      // 你需要调用后端API来实际处理考核数据
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
textarea {
  width: 300px;
  height: 100px;
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
