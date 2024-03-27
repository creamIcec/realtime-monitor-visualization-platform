<script>
import DataPanel from './DataPanel.vue';
import MapPanel from './MapPanel.vue';
import ActionCard from './ActionCard.vue';
import Chart from 'chart.js/auto';
export default {
    components: {
        DataPanel,
        MapPanel,
        ActionCard
    },
    data() {
        return {
            statisticsData: [
                { name: "累计充电度数", value: "103.5" },
                { name: "累计充电金额", value: "￥155.25" },
                { name: "累计充电时长", value: "31.3h" },
                { name: "累计充电次数", value: "12" }
            ],
            currentRunningCondition: [
                { name: "每小时耗电", value: "4kw/h" },
                { name: "每小时收益", value: "￥145/h" }
            ],
            chartData: {
                labels: ['2023-09-20', '2023-09-21', '2023-09-22', '2023-09-23', '2023-09-24', '2023-09-25', '2023-09-26', '2023-09-27'],
                datasets: [{
                    label: '当日充电耗电量(千瓦时)',
                    data: [366, 121, 521, 1420, 912, 132, 1314, 842],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 3
                }]
            },
            chartTitle: "点击以显示",
            chart: undefined
        }
    },
    methods: {
        updateData() {
            //this.statisticsData = [{name: "aaa", value: "bbb"}];
        },
        updateChart(itemTitle) {
            const randomDatas = [
                [231,32,534,231,645,805,65,23],
                [756,231,43,23,65,80,634,221],
                [290,323,903,246,73,834,84,345],
                [102,645,675,453,164,784,213,23],
            ];
            this.chartData.datasets[0].label = itemTitle;
            let factor = Math.floor(Math.random()*4);
            this.chartData.datasets[0].data = randomDatas[factor];
            this.chartTitle = itemTitle;
            
            if(this.chart != undefined){
                this.chart.destroy();
            }
            const ctx = document.getElementById('my-chart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: this.chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: itemTitle
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: '截止时间'
                            }
                        }
                    }
                }
            });
            this.chart = myChart;
        },
    },
}
</script>
<template>
    <div class="home-view-container">
        <DataPanel @click="updateChart('统计数据')" class="data-panels" Title="统计数据" Tip="点击卡片可查看图表" :CardContents="statisticsData"></DataPanel>
        <DataPanel @click="updateChart('筛选数据')" class="data-panels" Title="筛选数据" Tip="点击卡片可查看图表" :CardContents="statisticsData"></DataPanel>
        <DataPanel class="data-panels" Title="当前运行情况" :CardContents="currentRunningCondition" :HighlightContent="true">
        </DataPanel> <!--TODO: 动态生成-->
        <h1>{{ chartTitle }}</h1>
        <div class="interactive-container">
            <div class="chart-container">
                <canvas id="my-chart" ref="myChart" style="width: 600px; height: 400px;"></canvas>
            </div>
            <div>
                <h1>更多操作</h1>
                <ActionCard class="action-card" id="action-card-1" Title="进行每日耗电量与收益分析" Description="进行此分析, 以确保充电站收益稳定"></ActionCard>
                <ActionCard class="action-card" id="action-card-2" Title="进行危险检测" Description="进行此分析, 以确保充电站运行正常"></ActionCard>
            </div>
        </div>
        <MapPanel class="map-panel"></MapPanel>
    </div>
</template>
<style scoped>

h1{
    font-weight: bolder;
    font-size: 24px;
}

#my-chart{
    width: 600px;
    height: 400px;
}

.home-view-container {
    width: calc(100% - 128px);
    height: calc(100% - 80px);
    /*TODO: 决定Home的长宽由谁决定*/
    padding: 5px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    transform: scale(0.95, 0.95);
}

.data-panels {
    width: 100%;
}

.map-panel {
    width: 100%;
    height: 1080px;
    /*TODO: 跟随地图真实大小*/
    background-color: #c9c9c9;
    border-radius: 12px;
}
.chart-container{
    display: block;
    width: 600px;
    height: 400px;
}

.action-card{
    width: 700px;
    height: 250px;
}

#action-card-1{
    width: 600px;
    height: 180px;
}

#action-card-2{
    width: 400px;
    height: 90px;
}

.interactive-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
}
</style>