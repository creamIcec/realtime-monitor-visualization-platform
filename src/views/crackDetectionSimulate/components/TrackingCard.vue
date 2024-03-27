<script>
import TrackingColumn from './TrackingColumn.vue';
import StateColumn from './StateColumn.vue';
const signalValues = ['信号强', '信号一般', '信号弱'];
const batteryLevels = ['100%','90%','80%','70%','60%','50%','40%','30%','20%','10%','0%'];
export default{
    components:{
        TrackingColumn,
        StateColumn
    },
    props:{
        drone_name: "",
    },
    methods:{
        setDroneName(name){
            this.drone_name = name;
        }
    },
    data(){
        return {
            signalValues,
            batteryLevels,
        }
    }
}
</script>
<template>
    <div id="data" class="neumorphism">
        <div id="state-data">
            <StateColumn icon="./src/views/crackDetectionSimulate/components/state-card-assets/signal.svg" :values='signalValues' :svgInject='true' />
            <StateColumn icon="./src/views/crackDetectionSimulate/components/state-card-assets/battery.svg" :values='batteryLevels' :svgInject='true' />
        </div>
        <div id="info-data">
            <div style="grid-column: 1; grid-row: 1;">
                <span style="font-size: 20px; color: #4477CE; font-weight: 600; display: block;">名称</span>
                <span style="font-size: 16px; color: var(--day-night-font-color);">{{ drone_name }}</span>
            </div>
            <div style="grid-column: 2; grid-row: 1;">
                <TrackingColumn icon="./src/views/crackDetectionSimulate/components/state-card-assets/speed-meter.svg" title="实时速度" :svgInject='true' />
            </div>
            <div style="grid-column: 1; grid-row: 2;">
                <TrackingColumn icon="./src/views/crackDetectionSimulate/components/state-card-assets/position.svg" title="实时位置" :svgInject='true' />
            </div>
        </div>
    </div> <!--状态数据--->
</template>
<style scoped>
#data{
    width: 450px;
    height: 250px;
    position: absolute;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    row-gap: 10px;
    background: linear-gradient(135deg, var(--card-color-start), var(--card-color-end)),
                linear-gradient(270deg, var(--card-color-end) 20%, var(--card-color-start) 80%);
    border-radius: 20px;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    bottom: 20px;
    right: 20px;
}
#state-data{
    display: grid;
    grid-template-columns: repeat(10, 30%);
    grid-template-rows: 100%;
    column-gap: 10px;
    width: 100%;
    height: fit-content;
}
#info-data{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 20px;
}
.info-helper-icon{
    width: 32px;
    height: 32px;
    grid-row: 1;
    grid-column: 2;
}
@media (max-width:580px) {
    #data{
        width: 250px;
        height: 140px;
    }
}
</style>