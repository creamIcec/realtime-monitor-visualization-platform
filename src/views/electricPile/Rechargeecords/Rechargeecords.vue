<template>
    <div>
        <div class="selector">
            <select id=quicklySearchSelect class="quicklySearchSelect" tabindex=-98>
                <option value=-1 selected> -- 充值方式 --</option>
                <option value=ALIPAY_APP>APP支付宝支付</option>
                <option value=APP>APP微信支付</option>
                <option value=PAYPAL_APP>APP PayPal支付</option>
                <option value=JSAPI>微信公众号支付</option>
                <option value=SP>平台充值</option>
            </select>
            <input type="date" id="queryDate" v-model="selectedDate">
            <select id="userTypeSelect" v-model="selectedUserType" style="width: 150px;">
                <option value="-1" selected>-- 请选择用户类型 --</option>
                <option value="mobile">用户手机号</option>
                <option value="cardNum">IC卡号</option>
            </select>
            <input type="text" id="searchTextInput" class="form-control" placeholder="手机号码/IC卡号" style="width: 200px;" v-model="searchText" />
            <button @click="submitDate">查询</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th data-field="tradeNo">
                        <div class="th-inner">交易单号</div>
                        <div class="fht-cell"></div>
                    </th>
                    <th data-field="mobile">
                        <div class="th-inner">用户</div>
                        <div class="fht-cell"></div>
                    </th>
                    <th data-field="platformCompanyName">
                        <div class="th-inner">公司名称</div>
                        <div class="fht-cell"></div>
                    </th>
                    <th data-field="totalFee">
                        <div class="th-inner">充值金额(元)</div>
                        <div class="fht-cell"></div>
                    </th>
                    <th data-field="tradeType">
                        <div class="th-inner">充值方式</div>
                        <div class="fht-cell"></div>
                    </th>
                    <th data-field="transactionId">
                        <div class="th-inner">微信订单编号</div>
                        <div class="fht-cell"></div>
                    </th>
                    <th data-field="time">
                        <div class="th-inner">充值时间</div>
                        <div class="fht-cell"></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) of orderInformation" :key="index"  @mouseover="highlightRow(index)" @mouseout="resetRow(index)">
                    <td>{{ item.id }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.company }}</td>
                    <td>{{ item.money }}</td>
                    <td>{{ item.method }}</td>
                    <td>{{ item.orderid }}</td>
                    <td>{{ item.time }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rechargemethod: '',
            selectedDate: '', // 存储用户选择的日期
            selectedUserType: '-1', // 默认选择“请选择用户类型”
            searchText: '', // 存储用户输入的文本
            orderInformation: [
                {id: '20231223150825734504', phone: '13665603645', company: '电桩有限公司', money: '2.00元', method: '平台充值', orderid: '-', time: '2023-12-23 15:08:25'}, 
                {id: '20231223150351313880', phone: '13665603645', company: '电桩有限公司', money: '1.00元', method: '平台充值', orderid: '-', time: '2023-12-23 15:03:51'}, 
                {id: '20231214162033882850', phone: '18256505852', company: '电桩有限公司', money: '100.00元', method: '平台充值', orderid: '-', time: '2023-12-14 16:20:33'},
            ]
        };
    },
    methods: {
        submitDate() {
            // 在这里处理用户选择的日期，例如发送查询请求等
            console.log('用户选择的日期：', this.selectedDate);
            // 进一步处理逻辑...
        },
        handleSearch() {
            // 在这里处理用户选择的用户类型，例如发送查询请求等
            console.log('用户选择的用户类型：', this.selectedUserType);
            // 进一步处理逻辑...
        },
        clearInput() {
            // 清空输入框
            this.searchText = '';
        },
        highlightRow(rowIndex) {
            document.querySelectorAll('tr')[rowIndex + 1].style.backgroundColor = '#f5f5f5';
        },
        resetRow(rowIndex) {
            document.querySelectorAll('tr')[rowIndex + 1].style.backgroundColor = 'white';
        }

    },
};
</script>

<style scoped>
table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
}

th,
td {
    min-width: 100px;
    padding: 8px;
    text-align: left;
    border: 1px solid #ccc;
}


.th-inner {
    text-align: center;
}

input, select, button {
    height: 30px;
    width: 110px;
    margin: 10px;
}
</style>