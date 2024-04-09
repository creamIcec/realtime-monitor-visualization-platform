<template>
    <div>
        <div>
            <select name="selectcompany" id="selectcompany" v-model="selectedCompany">
                <option v-for="(company, index) of companies" :key="index" :value="company">{{ company }}</option>
            </select>
            <select name="selectplant" id="selectplant" v-model="selectedPlant">
                <option v-for="(plant, index) of plants" :key="index" :value="plant">{{ plant }}</option>
            </select>
            <p style="display: inline-block;">统计维度：</p>
            <button @click="showPage('day')">按日</button>
            <button @click="showPage('month')"> 按月</button>
            <input name="startdate" id="startdate" type="date" v-model="startdate"> - <input name="enddate" id="enddate" type="date" v-model="enddate">
        </div>
        <div v-if="currentPage === 'day'">
            <div>
                <h2>汇总统计</h2>
                <div class="box">
                    <div class="widget">
                        <h3>总电量(度)</h3>
                        <h2>{{ totalElectricityConsumption }}</h2>
                    </div>
                    <div class="widget">
                        <h3>总费用(元)</h3>
                        <h2>{{ totalCost }}</h2>
                    </div>
                    <div class="widget">
                        <h3>总电费(元)</h3>
                        <h2>{{ totalElectricityCost }}</h2>
                    </div>
                    <div class="widget">
                        <h3>总服务费(元)</h3>
                        <h2>{{ totalServiceFee }}</h2>
                    </div>
                    <div class="widget">
                        <h3>充电次数</h3>
                        <h2>{{ chargingFrequency }}</h2>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex-container">
                    <span>
                        <h2>详细数据</h2>
                    </span>
                    <div>
                        <svg width="2vw" height="2vh" style="display: inline-block;">
                            <?xml version="1.0" encoding="iso-8859-1"?>
                            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                                <polygon style="fill:#D0FBFD;"
                                    points="449.362,8.17 449.362,438.468 394.894,460.255 416.681,8.17 " />
                                <polygon style="fill:#F0FEFF;"
                                    points="62.638,8.17 62.638,503.83 384,503.83 416.681,449.362 416.681,8.17 " />
                                <polygon style="fill:#FFCD60;"
                                    points="384,73.532 384,133.447 329.532,155.234 351.319,73.532 " />
                                <g>
                                    <polygon style="fill:#FFDB8A;"
                                        points="351.319,73.532 351.319,133.447 272.34,155.234 193.362,133.447 215.149,73.532 	" />
                                    <polygon style="fill:#FFDB8A;"
                                        points="384,133.447 384,193.362 329.532,215.149 351.319,133.447 	" />
                                </g>
                                <polygon style="fill:#FFEAB5;"
                                    points="351.319,133.447 351.319,193.362 272.34,215.149 193.362,193.362 215.149,133.447 " />
                                <polygon style="fill:#50D1DD;"
                                    points="449.362,438.468 384,503.83 384,438.468 416.681,438.468 " />
                                <polygon style="fill:#FFCD60;"
                                    points="384,193.362 384,253.277 329.532,275.064 351.319,193.362 " />
                                <g>
                                    <polygon style="fill:#FFDB8A;"
                                        points="351.319,193.362 351.319,253.277 272.34,275.064 193.362,253.277 215.149,193.362 	" />
                                    <polygon style="fill:#FFDB8A;"
                                        points="384,313.191 384,253.277 351.319,253.277 329.532,334.979 	" />
                                </g>
                                <polygon style="fill:#FFEAB5;"
                                    points="351.319,313.191 351.319,253.277 215.149,253.277 193.362,313.191 272.34,334.979 " />
                                <rect x="215.149" y="313.191" style="fill:#FFDB8A;" width="136.17" height="59.915" />
                                <rect x="351.319" y="313.191" style="fill:#FFCD60;" width="32.681" height="59.915" />
                                <polygon style="fill:#FF9269;"
                                    points="215.149,73.532 215.149,133.447 171.574,155.234 128,133.447 128,73.532 " />
                                <polygon style="fill:#FFB082;"
                                    points="215.149,133.447 215.149,193.362 171.574,215.149 128,193.362 128,133.447 " />
                                <polygon style="fill:#FF9269;"
                                    points="215.149,193.362 215.149,253.277 171.574,275.064 128,253.277 128,193.362 " />
                                <polygon style="fill:#FFB082;"
                                    points="215.149,253.277 215.149,313.191 171.574,334.979 128,313.191 128,253.277 " />
                                <rect x="128" y="313.191" style="fill:#FF9269;" width="87.149" height="59.915" />
                                <path d="M449.362,0H62.638c-4.512,0-8.17,3.658-8.17,8.17v495.66c0,4.512,3.658,8.17,8.17,8.17H384c2.167,0,4.244-0.861,5.778-2.393
	l65.362-65.362c1.532-1.532,2.392-3.61,2.392-5.777V8.17C457.532,3.658,453.875,0,449.362,0z M70.809,16.34h370.383v413.957H384
	c-4.513,0-8.17,3.658-8.17,8.17v57.191H70.809V16.34z M429.638,446.638l-37.468,37.468v-37.468H429.638z" />
                                <path d="M128,381.277h256c4.513,0,8.17-3.658,8.17-8.17V73.532c0-4.512-3.657-8.17-8.17-8.17H128c-4.512,0-8.17,3.658-8.17,8.17
	v299.574C119.83,377.618,123.488,381.277,128,381.277z M206.979,261.447v43.574H136.17v-43.574H206.979z M136.17,245.106v-43.574
	h70.809v43.574H136.17z M223.319,261.447h59.915c4.513,0,8.17-3.658,8.17-8.17c0-4.512-3.657-8.17-8.17-8.17h-59.915v-43.574H375.83
	v43.574h-59.915c-4.513,0-8.17,3.658-8.17,8.17c0,4.512,3.657,8.17,8.17,8.17h59.915v43.574H223.319V261.447z M375.83,185.191
	H223.319v-43.574H375.83V185.191z M206.979,185.191H136.17v-43.574h70.809V185.191z M136.17,321.362h70.809v43.574H136.17V321.362z
	 M223.319,364.936v-43.574H375.83v43.574H223.319z M375.83,125.277H223.319V81.702H375.83V125.277z M206.979,81.702v43.574H136.17
	V81.702H206.979z" />
                                <path d="M302.298,397.617H128c-4.512,0-8.17,3.658-8.17,8.17c0,4.512,3.658,8.17,8.17,8.17h174.298c4.513,0,8.17-3.658,8.17-8.17
	C310.468,401.275,306.811,397.617,302.298,397.617z" />
                                <path d="M215.149,430.298H128c-4.512,0-8.17,3.658-8.17,8.17c0,4.512,3.658,8.17,8.17,8.17h87.149c4.512,0,8.17-3.658,8.17-8.17
	C223.319,433.956,219.661,430.298,215.149,430.298z" />
                            </svg>
                        </svg>
                        <p style="display: inline-block;">导出数据</p>
                    </div>
                </div>
                <div class="container">
                    <table>
                        <thead>
                            <tr>
                                <th>日期</th>
                                <th>充电量（度）</th>
                                <th>总费用（元）</th>
                                <th>电费（元）</th>
                                <th>服务费（元）</th>
                                <th>平台总费用（元）</th>
                                <th>互联互通总费用（元）</th>
                                <th>总充电次数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of dayTableData" :key="index" @mouseover="highlightRow(index)" @mouseout="resetRow(index)">
                                <td>{{ item.date }}</td>
                                <td>{{ item.chargeEnergy }}</td>
                                <td>{{ item.totalCost }}</td>
                                <td>{{ item.elecFee }}</td>
                                <td>{{ item.serviceFee }}</td>
                                <td>{{ item.platformTotalCost }}</td>
                                <td>{{ item.linkTotalCost }}</td>
                                <td>{{ item.orderCount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-else>
            <div>
                <h2>汇总统计</h2>
                <div class="box">
                    <div class="widget">
                        <h3>总电量(度)</h3>
                        <h2>{{ totalElectricityConsumption }}</h2>
                    </div>
                    <div class="widget">
                        <h3>总费用(元)</h3>
                        <h2>{{ totalCost }}</h2>
                    </div>
                    <div class="widget">
                        <h3>总电费(元)</h3>
                        <h2>{{ totalElectricityCost }}</h2>
                    </div>
                    <div class="widget">
                        <h3>总服务费(元)</h3>
                        <h2>{{ totalServiceFee }}</h2>
                    </div>
                    <div class="widget">
                        <h3>充电次数</h3>
                        <h2>{{ chargingFrequency }}</h2>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex-container">
                    <span>
                        <h2>详细数据</h2>
                    </span>
                    <div>
                        <svg width="2vw" height="2vh" style="display: inline-block;">
                            <?xml version="1.0" encoding="iso-8859-1"?>
                            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                                <polygon style="fill:#D0FBFD;"
                                    points="449.362,8.17 449.362,438.468 394.894,460.255 416.681,8.17 " />
                                <polygon style="fill:#F0FEFF;"
                                    points="62.638,8.17 62.638,503.83 384,503.83 416.681,449.362 416.681,8.17 " />
                                <polygon style="fill:#FFCD60;"
                                    points="384,73.532 384,133.447 329.532,155.234 351.319,73.532 " />
                                <g>
                                    <polygon style="fill:#FFDB8A;"
                                        points="351.319,73.532 351.319,133.447 272.34,155.234 193.362,133.447 215.149,73.532 	" />
                                    <polygon style="fill:#FFDB8A;"
                                        points="384,133.447 384,193.362 329.532,215.149 351.319,133.447 	" />
                                </g>
                                <polygon style="fill:#FFEAB5;"
                                    points="351.319,133.447 351.319,193.362 272.34,215.149 193.362,193.362 215.149,133.447 " />
                                <polygon style="fill:#50D1DD;"
                                    points="449.362,438.468 384,503.83 384,438.468 416.681,438.468 " />
                                <polygon style="fill:#FFCD60;"
                                    points="384,193.362 384,253.277 329.532,275.064 351.319,193.362 " />
                                <g>
                                    <polygon style="fill:#FFDB8A;"
                                        points="351.319,193.362 351.319,253.277 272.34,275.064 193.362,253.277 215.149,193.362 	" />
                                    <polygon style="fill:#FFDB8A;"
                                        points="384,313.191 384,253.277 351.319,253.277 329.532,334.979 	" />
                                </g>
                                <polygon style="fill:#FFEAB5;"
                                    points="351.319,313.191 351.319,253.277 215.149,253.277 193.362,313.191 272.34,334.979 " />
                                <rect x="215.149" y="313.191" style="fill:#FFDB8A;" width="136.17" height="59.915" />
                                <rect x="351.319" y="313.191" style="fill:#FFCD60;" width="32.681" height="59.915" />
                                <polygon style="fill:#FF9269;"
                                    points="215.149,73.532 215.149,133.447 171.574,155.234 128,133.447 128,73.532 " />
                                <polygon style="fill:#FFB082;"
                                    points="215.149,133.447 215.149,193.362 171.574,215.149 128,193.362 128,133.447 " />
                                <polygon style="fill:#FF9269;"
                                    points="215.149,193.362 215.149,253.277 171.574,275.064 128,253.277 128,193.362 " />
                                <polygon style="fill:#FFB082;"
                                    points="215.149,253.277 215.149,313.191 171.574,334.979 128,313.191 128,253.277 " />
                                <rect x="128" y="313.191" style="fill:#FF9269;" width="87.149" height="59.915" />
                                <path d="M449.362,0H62.638c-4.512,0-8.17,3.658-8.17,8.17v495.66c0,4.512,3.658,8.17,8.17,8.17H384c2.167,0,4.244-0.861,5.778-2.393
	l65.362-65.362c1.532-1.532,2.392-3.61,2.392-5.777V8.17C457.532,3.658,453.875,0,449.362,0z M70.809,16.34h370.383v413.957H384
	c-4.513,0-8.17,3.658-8.17,8.17v57.191H70.809V16.34z M429.638,446.638l-37.468,37.468v-37.468H429.638z" />
                                <path d="M128,381.277h256c4.513,0,8.17-3.658,8.17-8.17V73.532c0-4.512-3.657-8.17-8.17-8.17H128c-4.512,0-8.17,3.658-8.17,8.17
	v299.574C119.83,377.618,123.488,381.277,128,381.277z M206.979,261.447v43.574H136.17v-43.574H206.979z M136.17,245.106v-43.574
	h70.809v43.574H136.17z M223.319,261.447h59.915c4.513,0,8.17-3.658,8.17-8.17c0-4.512-3.657-8.17-8.17-8.17h-59.915v-43.574H375.83
	v43.574h-59.915c-4.513,0-8.17,3.658-8.17,8.17c0,4.512,3.657,8.17,8.17,8.17h59.915v43.574H223.319V261.447z M375.83,185.191
	H223.319v-43.574H375.83V185.191z M206.979,185.191H136.17v-43.574h70.809V185.191z M136.17,321.362h70.809v43.574H136.17V321.362z
	 M223.319,364.936v-43.574H375.83v43.574H223.319z M375.83,125.277H223.319V81.702H375.83V125.277z M206.979,81.702v43.574H136.17
	V81.702H206.979z" />
                                <path d="M302.298,397.617H128c-4.512,0-8.17,3.658-8.17,8.17c0,4.512,3.658,8.17,8.17,8.17h174.298c4.513,0,8.17-3.658,8.17-8.17
	C310.468,401.275,306.811,397.617,302.298,397.617z" />
                                <path d="M215.149,430.298H128c-4.512,0-8.17,3.658-8.17,8.17c0,4.512,3.658,8.17,8.17,8.17h87.149c4.512,0,8.17-3.658,8.17-8.17
	C223.319,433.956,219.661,430.298,215.149,430.298z" />
                            </svg>
                        </svg>
                        <p style="display: inline-block;">导出数据</p>
                    </div>
                </div>
                <div class="container">
                    <table>
                        <thead>
                            <tr>
                                <th>月份</th>
                                <th>充电量（度）</th>
                                <th>总费用（元）</th>
                                <th>电费（元）</th>
                                <th>服务费（元）</th>
                                <th>平台总费用（元）</th>
                                <th>互联互通总费用（元）</th>
                                <th>总充电次数</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of monthTableData" :key="index" @mouseover="highlightRow(index)" @mouseout="resetRow(index)">
                                <td>{{ item.month }}</td>
                                <td>{{ item.chargeEnergy }}</td>
                                <td>{{ item.totalCost }}</td>
                                <td>{{ item.elecFee }}</td>
                                <td>{{ item.serviceFee }}</td>
                                <td>{{ item.platformTotalCost }}</td>
                                <td>{{ item.linkTotalCost }}</td>
                                <td>{{ item.orderCount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'timeRange',
    data() {
        return {
            currentPage: "",
            companies: ["所有公司", "公司A", "公司B"],
            selectedCompany: "",
            plants: ["所有电站", "电站A", "电站B"],
            selectedPlant: "",
            totalElectricityConsumption: 4.434,
            totalCost: 15.68,
            totalElectricityCost: 11.98,
            totalServiceFee: 3.7,
            chargingFrequency: 16,
            dayTableData: [
                { date: '2023.12.23', chargeEnergy: '1.889', totalCost: '2.27', elecFee: '2.08', serviceFee: '0.19', platformTotalCost: '2.27', linkTotalCost: '0', orderCount: '2' },
                { date: '2023.12.19', chargeEnergy: '1.7', totalCost: '9.18', elecFee: '6.8', serviceFee: '2.38', platformTotalCost: '9.18', linkTotalCost: '0', orderCount: '5' },
                { date: '2023.12.16', chargeEnergy: '0.7', totalCost: '3.78', elecFee: '2.8', serviceFee: '0.98', platformTotalCost: '3.78', linkTotalCost: '0', orderCount: '5' },
                { date: '2023.12.14', chargeEnergy: '0.145', totalCost: '0.45', elecFee: '0.3', serviceFee: '0.15', platformTotalCost: '0.45', linkTotalCost: '0', orderCount: '4' }
            ],
            monthTableData: [
                { month: '2023.12', chargeEnergy: '18.89', totalCost: '22.7', elecFee: '20.8', serviceFee: '1.9', platformTotalCost: '22.7', linkTotalCost: '0', orderCount: '20' },
                { month: '2023.11', chargeEnergy: '17', totalCost: '91.8', elecFee: '68', serviceFee: '23.8', platformTotalCost: '91.8', linkTotalCost: '0', orderCount: '50' },
                { month: '2023.10', chargeEnergy: '7', totalCost: '37.8', elecFee: '28', serviceFee: '9.8', platformTotalCost: '37.8', linkTotalCost: '0', orderCount: '50' },
                { month: '2023.9', chargeEnergy: '1.45', totalCost: '4.5', elecFee: '3', serviceFee: '1.5', platformTotalCost: '4.5', linkTotalCost: '0', orderCount: '40' }

            ],
            startdate: '',
            enddate: '',
        };
    },
    mounted() {
        // 初始化时设置默认选中项
        this.selectedCompany = this.companies[0];
        this.selectedPlant = this.plants[0];
        this.currentPage = "day"; // 默认选择日
    },
    methods: {
        showPage(page) {
            this.currentPage = page;
        },
        highlightRow(rowIndex) {
            document.querySelectorAll('tr')[rowIndex + 1].style.backgroundColor = '#f5f5f5';
        },
        resetRow(rowIndex) {
            document.querySelectorAll('tr')[rowIndex + 1].style.backgroundColor = 'white';
        }
    },
    components: {

    },
};
</script>

<style scoped>
.widget {
    display: inline-block;
    text-align: center;
    background-color: rgb(26, 25, 25);
    border: 0px solid rgb(51, 44, 44);
    border-radius: 12px;
    width: 16vw;
    box-shadow: 5px 5px 10px gray;
    background-color: #f5f5f5;
}

.box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-item {
    flex: 1;
    text-align: center;
}

.flex-item p {
    margin: 0;
}

.flex-item p:first-child {
    font-weight: bold;
}

.container {
    width: 100%;
    overflow: auto;
}

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

input, select, button {
    height: 30px;
    width: 100px;
    margin: 10px;
}
</style>