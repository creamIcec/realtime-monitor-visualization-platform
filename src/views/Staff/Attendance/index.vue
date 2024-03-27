<template>
  <div>
    <h1>考勤管理</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="employeeID">员工ID：</label>
        <input type="text" id="employeeID" v-model="employeeID" required>
      </div>
      <div>
        <label for="attendanceDate">考勤日期：</label>
        <input type="date" id="attendanceDate" v-model="attendanceDate" required>
      </div>
      <div>
        <label for="attendanceStatus">考勤状态：</label>
        <select id="attendanceStatus" v-model="attendanceStatus" required>
          <option value="Present">出勤</option>
          <option value="Absent">缺勤</option>
          <option value="Late">迟到</option>
        </select>
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
      employeeID: '',
      attendanceDate: '',
      attendanceStatus: 'Present'
    };
  },
  methods: {
    submitForm() {
      // 在这里可以将数据发送给后端API进行处理
      console.log('提交表单:', this.employeeID, this.attendanceDate, this.attendanceStatus);
      // 你需要调用后端API来实际处理考勤数据
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
