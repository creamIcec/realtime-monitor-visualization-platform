<script>
import '../lib/svg-inject';
export default{
    methods: {
        setData(data){
            this.data = data;
        }
    },
    props: {
        icon: { type: String, required: false },
        svgInject: {type: Boolean, required: false, default: false},
        title: "",
        data: "暂无数据"
    },
    mounted(){
        if(this.svgInject){
            const icon = this.$refs.icon;
            SVGInject(icon);
            icon.classList.add("svg-injected");
        }
    }
};
</script>
<template>
     <div class="info-title-wrapper">
        <span style="font-size: 20px; color: #4477CE; font-weight: 600; display: block;">{{ title }}</span>
        <img ref="icon" :src=icon id="speed-meter-icon" class="info-helper-icon" alt="speed">
    </div>
    <span style="font-size: 16px; font-weight: bolder; color: #1199ee; display: inline-block;" id="speed">{{ data }}</span>
</template>
<style scoped>
.info-helper-icon{
    width: 32px;
    height: 32px;
    grid-row: 1;
    grid-column: 2;
}
.info-title-wrapper{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 100%;
}
</style>